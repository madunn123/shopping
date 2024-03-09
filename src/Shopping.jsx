import React, { useEffect, useState } from 'react';

import { initialDataShopping, initialKeranjang } from './utils/shopping';

import Keranjang from './component/Keranjang';

import Product from './component/Product';

export default function Shoppings() {
    const [products, setProducts] = useState(initialDataShopping);
    const [totalPrice, setTotalPrice] = useState(0);
    const [animation, setAnimation] = useState({
        x: 0,
        y: 0,
    });

    const addToKeranjang = (id) => {
        setProducts(products.map((prod) => {
            if (prod.id === id) {
                return {
                    ...prod,
                    keranjang: !prod.keranjang
                }
            } else {
                return prod
            }
        }))
    };

    const removeKeranjang = (id) => {
        setProducts(
            products.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        keranjang: !product.keranjang,
                    };
                } else {
                    return product;
                }
            })
        );
    };

    const incrementCount = (id) => {
        setProducts(
            products.map((prod) => {
                if (prod.id === id) {
                    return {
                        ...prod,
                        count: prod.count + 1,
                    };
                } else {
                    return prod;
                }
            })
        );
    };

    const decrementCount = (id) => {
        setProducts(
            products.map((prod) => {
                if (prod.id === id && prod.count > 1) {
                    return {
                        ...prod,
                        count: prod.count - 1,
                    };
                } else {
                    return prod;
                }
            })
        );
    };

    const handleInputCount = (e, id) => {
        setProducts(products.map((prod) => {
            if (prod.id === id) {
                return {
                    ...prod,
                    count: e.target.value,
                }
            } else {
                return prod
            }
        }))
    }

    const calculateTotalPrice = () => {
        let total = 0;

        products.forEach((product) => {
            if (product.keranjang) {
                // Check if product is in wislist
                const isInWislist = product.wislist;
                // Only calculate the price if the product is in the wislist
                if (isInWislist) {
                    total += product.price * product.count;
                }
            }
        });

        setTotalPrice(total);
    }

    const checkBuyWislist = (id) => {
        setProducts(products.map((product) => {
            if (product.id === id) {
                return {
                    ...product,
                    wislist: !product.wislist
                }
            } else {
                return product
            }
        }))
    }

    const selectAllWislist = () => {
        setProducts(products.map((product) => {
            if (product.keranjang) {
                return {
                    ...product,
                    wislist: !product.wislist
                };
            } else {
                return product;
            }
        }))
    }

    useEffect(() => {
        calculateTotalPrice();
    }, [products])

    useEffect(() => {
        const handlePointerMove = (e) => {
            setAnimation({
                x: e.clientX,
                y: e.clientY,
            });
        };

        document.addEventListener('pointermove', handlePointerMove);

        return () => {
            document.removeEventListener('pointermove', handlePointerMove);
        };
    }, []);

    return (
        <div className="bg-slate-900 text-slate-500 h-[100vh] w-[100vw] p-20 overflow-hidden relative">
            <div
                className="animation-cursor absolute bg-green-100 h-[200px] animate-pulse w-[200px] blur-[200px] rounded-full -top-4 -left-10"
                style={{
                    transform: `translate(${animation.x}px, ${animation.y}px)`,
                }}
            />

            <div className="flex flex-col gap-4">
                <h1 className="m-0 text-xl font-bold uppercase text-slate-300">
                    product available
                </h1>

                <div className="flex flex-row justify-between gap-20">
                    <Product products={products} addToKeranjang={addToKeranjang} />

                    <Keranjang
                        initialProducts={products}
                        incrementCount={incrementCount}
                        decrementCount={decrementCount}
                        removeKeranjang={removeKeranjang}
                        totalPrice={totalPrice}
                        handleInputCount={handleInputCount}
                        checkBuyWislist={checkBuyWislist}
                        selectAllWislist={selectAllWislist}
                    />
                </div>
            </div>
        </div>
    );
}
