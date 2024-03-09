import React, { Fragment, useState } from 'react'
import { MdDelete } from 'react-icons/md';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function Keranjang({ checkBuyWislist, totalPrice, initialProducts, incrementCount, decrementCount, removeKeranjang, handleInputCount }) {
    const priceChecked = initialProducts.filter((product) => product.wislist).length;

    return (
        <div className="flex flex-col gap-4 w-[25%]">
            <div className="border rounded-lg border-slate-600 h-[450px] p-6 overflow-y-scroll">
                <div className="flex flex-col h-full gap-4">
                    <h1 className="text-lg font-bold uppercase text-slate-400">
                        Keranjang
                    </h1>

                    <div className="group">
                        <label
                            htmlFor="select-all"
                            className="flex flex-row items-center gap-2 p-3 text-sm capitalize duration-500 border rounded-lg cursor-pointer text-slate-400 group-hover:bg-slate-800 border-slate-600"
                        >
                            <input
                                type="checkbox"
                                id="select-all"
                                className="w-4 h-4 accent-green-500"
                            />
                            <span className="duration-500 group-hover:text-slate-200">
                                pilih semua
                            </span>
                        </label>
                    </div>

                    {initialProducts.filter((product) => product.keranjang).length > 0 ? (
                        <Fragment>
                            {initialProducts
                                ?.filter((product) => product.keranjang)
                                ?.map((prodct) => (
                                    <div
                                        key={prodct.id}
                                        className="flex flex-col gap-4 p-3 text-sm border rounded-lg border-slate-600 text-slate-300"
                                    >
                                        <div className="flex flex-row items-start gap-4">
                                            <img
                                                src={prodct.images}
                                                alt={prodct.images}
                                                className="w-12 h-12 bg-cover rounded-md"
                                            />
                                            <div className="flex flex-col gap-2">
                                                <span>{prodct.title}</span>
                                                <span>
                                                    {new Intl.NumberFormat('id-ID', {
                                                        style: 'currency',
                                                        currency: 'IDR',
                                                    }).format(prodct.price)}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex flex-row items-center justify-between gap-3">
                                            <div className="flex flex-row items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4 accent-green-500"
                                                    onChange={() => checkBuyWislist(prodct.id)}
                                                />
                                                <span className="text-slate-400">
                                                    {prodct.location}
                                                </span>
                                            </div>

                                            <div className="flex flex-row items-center gap-3">
                                                <button
                                                    type="button"
                                                    onClick={() => removeKeranjang(prodct.id)}
                                                >
                                                    <MdDelete className="text-2xl duration-500 hover:text-red-500" />
                                                </button>

                                                <div className="flex flex-row items-center gap-0 p-1 text-sm border rounded-lg border-slate-400">
                                                    <button
                                                        type="button"
                                                        onClick={() => decrementCount(prodct.id)}
                                                        className={
                                                            prodct.count > 1 && 'text-green-500'
                                                        }
                                                    >
                                                        <FaMinus className="text-xs" />
                                                    </button>
                                                    <input
                                                        type="number"
                                                        value={prodct.count}
                                                        min={1}
                                                        max={100}
                                                        className="flex-none w-8 text-center bg-transparent outline-none"
                                                        onChange={(e) => handleInputCount(e, prodct.id)}
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => incrementCount(prodct.id)}
                                                        className={
                                                            prodct.count >= 1 && 'text-green-500'
                                                        }
                                                    >
                                                        <FaPlus className="text-xs" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </Fragment>
                    ) : (
                        <div className="flex items-center justify-center h-full font-semibold uppercase">
                            keranjang belum tersedia
                        </div>
                    )}
                </div>
            </div>

            <div className="h-[150px] border rounded-lg border-slate-600 p-4">
                <div className="flex flex-col gap-2">
                    <h1 className="m-0 text-lg font-bold capitalize text-slate-300">
                        ringkasan belanja
                    </h1>
                    <div className="flex flex-row items-center justify-between">
                        <span>total</span>
                        <span>
                            {priceChecked > 0 ?
                                new Intl.NumberFormat('id-ID', {
                                    style: 'currency',
                                    currency: 'IDR',
                                }).format(totalPrice)
                                : new Intl.NumberFormat('id-ID', {
                                    style: 'currency',
                                    currency: 'IDR',
                                }).format(0)}
                        </span>
                    </div>

                    <button
                        type="button"
                        className="p-2 text-sm font-bold text-green-500 uppercase border border-green-500 rounded-lg xl:mt-2"
                    >
                        beli
                    </button>
                </div>
            </div>
        </div>
    )
}