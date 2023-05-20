import React from 'react'

interface Items {
  id: number
  item: string
  qty: number
}

interface DetailCartProps {
  items: Items[]
  handleChangeItems: (val: Items[]) => void
}

function DetailCart({ items, handleChangeItems }: DetailCartProps) {
  const addItem = (val: number) => {
    const newValue = items.slice()
    const findItems = items.findIndex((el) => el.id === val)
    const tempArr = {
      id: items[findItems].id,
      item: items[findItems].item,
      qty: items[findItems].qty + 1
    }
    newValue.splice(findItems, 1)
    newValue.splice(findItems, 0, tempArr)
    handleChangeItems(newValue)
  }

  const reduceItem = (val: number) => {
    const newValue = items.slice()
    const findItems = items.findIndex((el) => el.id === val)
    const tempArr = {
      id: items[findItems].id,
      item: items[findItems].item,
      qty: items[findItems].qty - 1
    }
    newValue.splice(findItems, 1)
    newValue.splice(findItems, 0, tempArr)
    handleChangeItems(newValue)
  }
  return (
    <>
        <div className='flex flex-col gap-4 my-4 font-inter text-lg'>
            {items.map((item, index) => {
              return (
                <div className="flex gap-4" key={index}>
                    <div className='border bg-stone-200 px-6 py-2 font-black shadow-md rounded-md w-full h-full flex justify-between'>
                      <div className="">
                        {item.item}
                      </div>
                      <div className="">
                        {item.qty}
                      </div>
                    </div>
                    <button className='bg-[#2abb3e] h-7 w-7' onClick={() => { addItem(item.id) }}>+</button>
                    <button className='bg-red-600 h-7 w-7' onClick={() => { reduceItem(item.id) }}>-</button>
                </div>
              )
            })}
        </div>
        <div className='flex gap-x-56 font-montserrat text-xl'>
                  <span>Total Amount</span>
                  <span className='underline'>$32.99</span>
        </div>
    </>
  )
}

/* eslint-disable eol-last */

export default DetailCart