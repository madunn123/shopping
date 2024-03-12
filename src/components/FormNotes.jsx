import React, { Fragment, useState } from 'react';

import { Dialog, Transition } from '@headlessui/react';

export default function FormNotes({ onHide, handleAddNewNotes }) {
  const [isOpen, setIsOpen] = useState(true);
  const [textInput, setTextInput] = useState({
    title: '',
    body: '',
  });

  const handleSubmit = () => {
    handleAddNewNotes({
      title: textInput.title,
      body: textInput.body,
    });

    setTextInput({
      title: '',
      body: '',
    });

    setTimeout(() => {
      onHide();
    }, 500);
  };

  return (
    <Transition appear show={isOpen} as={Fragment} onClick={onHide}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(true)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="w-full max-w-3xl overflow-hidden text-left align-middle transition-all transform rounded-lg shadow-xl group">
                <Dialog.Panel className="p-10 duration-500 group-hover:bg-slate-700 bg-slate-600">
                  <div className="flex flex-col gap-4">
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-medium leading-6 text-slate-300 font-title"
                    >
                      Create Notes
                    </Dialog.Title>

                    <form className="flex flex-col gap-4">
                      <input
                        type="text"
                        value={textInput.title}
                        className="p-2 px-3 text-sm duration-500 bg-transparent rounded-md outline-none ring-1 ring-slate-500 focus:ring-green-500 focus:text-slate-300 placeholder:text-slate-400 text-slate-400"
                        placeholder="title notes..."
                        onChange={(e) => setTextInput({
                          ...textInput,
                          title: e.target.value,
                        })}
                      />
                      <textarea
                        rows="10"
                        value={textInput.body}
                        className="p-2 px-3 text-sm duration-500 bg-transparent rounded-md outline-none ring-1 ring-slate-500 focus:ring-green-500 focus:text-slate-300 placeholder:text-slate-400 text-slate-400"
                        placeholder="body notes..."
                        onChange={(e) => setTextInput({
                          ...textInput,
                          body: e.target.value,
                        })}
                      />
                    </form>
                  </div>

                  <div className="mt-4 flex flex-row items-center gap-2.5">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium uppercase duration-500 bg-green-600 border border-transparent rounded-md text-slate-100 font-title hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleSubmit}
                    >
                      save
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium uppercase duration-500 bg-red-600 border border-transparent rounded-md text-slate-100 font-title hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onHide}
                    >
                      cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
