import React from 'react'

import { FaLocationDot } from 'react-icons/fa6';
import { IoPricetags } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { IoBasketOutline } from 'react-icons/io5';

export default function Product({ products, addToKeranjang }) {
    return (
        <div className="flex flex-row items-start snap-mandatory snap-x pb-4 gap-4 overflow-x-scroll w-[75%]">
            {products?.map((product) => (
                <div
                    key={product.id}
                    className="flex-none p-3 border rounded-md snap-center border-slate-600 "
                >
                    <div className="flex flex-col gap-4">
                        <img
                            src={product.images}
                            alt={product.images}
                            className="bg-cover flex-none h-[300px] w-[300px]"
                            loading="lazy"
                            draggable="false"
                        />
                        <div className="flex flex-col gap-2">
                            <h6 className="font-semibold text-slate-300 w-[300px] text-base">
                                {product.title}
                            </h6>

                            <span className="text-xl text-slate-200">
                                {new Intl.NumberFormat('id-ID', {
                                    style: 'currency',
                                    currency: 'IDR',
                                }).format(product.price)}
                            </span>

                            <span className="flex flex-row items-center gap-2 text-sm">
                                <FaLocationDot />
                                {product.location}
                            </span>
                            <span className="flex flex-row items-center gap-2 text-sm text-green-500">
                                <IoPricetags />
                                {product.price}
                            </span>

                            <div className="flex flex-row items-center gap-2">
                                <span className="flex flex-row items-center gap-2 text-sm text-yellow-500">
                                    <FaStar />
                                    {product.rating}
                                </span>
                                |<span className="text-sm">{product.sold}</span>
                            </div>

                            <div className="flex flex-row items-center gap-4 xl:mt-4">
                                <button
                                    type="button"
                                    className="w-full h-full p-2 text-sm text-green-500 capitalize duration-500 border border-green-500 rounded-lg hover:bg-green-600 hover:text-slate-100"
                                >
                                    beli sekarang
                                </button>
                                <button
                                    type="button"
                                    className="flex justify-center w-full p-2 text-xl text-yellow-500 capitalize duration-500 border border-yellow-500 rounded-lg hover:bg-yellow-600 hover:text-slate-100"
                                    onClick={() => addToKeranjang(product.id)}
                                >
                                    <IoBasketOutline />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}