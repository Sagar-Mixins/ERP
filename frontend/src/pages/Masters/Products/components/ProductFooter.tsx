import React from 'react'

function ProductFooter({ onSaveDraft, onNext, onBack, step, onPublish }) {
    return (
        <div className='fixed bottom-0 left-0 right-0 px-6 py-3 bg-white'>
            <div className='flex item-center justify-between'>
                <div className='flex justify-left gap-3'>
                    <span>
                        Change not saved
                    </span>
                </div>
                <div className='flex justify-right gap-2'>
                    {onBack && (
                        <button onClick={onBack}
                            className='rounded-lg border border-gray-300 px-3 py-1.5 text-sm'
                        >
                            ← Back
                        </button>
                    )}
                    <button onClick={onSaveDraft}
                        className='rounded-lg border border-gray-300 px-3 py-1.5 text-sm '>
                        Save draft
                    </button>
                    {step < 3 ? (
                        <button
                            onClick={onNext}
                            className='rounded-lg bg-blue-600 px-4 py-1.5 text-sm text-white hover:bg-blue-700'
                        >
                            Next →
                        </button>
                    ) : (
                        <button
                            onClick={onPublish}
                            className='rounded-lg bg-blue-600 px-4 py-1.5 text-sm text-white hover:bg-blue-700'
                        >
                            Publish
                        </button>
                    )}
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default ProductFooter;