import React from 'react'
import NavBar from '../component/navBar'

function ProductList(): JSX.Element {
  return (
    <section className='flex flex-col items-center relative w-[1440px] h-[2318px]'>
      <NavBar />
      {/* Hero Content - Product List */}
      <section className='flex flex-col justify-center items-center bg-[#f6f6f6] gap-[10px] w-[1440px] h-[273px]'>
        <div className='flex flex-col justify-center items-center px-[100px] gap-[10px] w-[236px] h-[273px] '>
          <h1 className='font-inter font-bold text-[40px] leading-[48px] w-[236px] h-[48px] '>
            Product List
          </h1>
          <span className='font-inter font-normal text-xs leading-4 w-[120px] h-4'>
            Home{'>'}
            <span className='text-[#0085ff]'>
              Product List{' '}
            </span>
          </span>
        </div>
      </section>
      {/* Frame 54 - Product List */}
      <section className='flex flex-col items-start px-[50px] gap-[10px] w-[1280px] h-[145px]'>
        <div className='flex flex-row items-center px-[10px] w-full h-[45px] border-[1px] border-solid border-[rgba(0,0,0,0.3)]'>
          <div className='flex flex-row items-center gap-[30px] w-[640px] h-[25px]'>
            <div className='w-[95px] h-[25px]'>
              {/* SVG */}
              {/* SVG */}
              {/* SVG */}
            </div>
            <div className='flex flex-row justify-center items-center gap-[10px] w-[154px] h-[25px]'>
              <span className='font-inter font-normal text-sm leading-4 text-[rgba(0,0,0,0.75)] w-[154px] h-[17px]'>
                Showing 1-9 of 9 results
              </span>
            </div>
          </div>
          <div className='flex flex-row justify-end items-center gap-[30px] w-[640px] h-[25px]'>
            <div className='flex flex-row justify-center items-center gap-[10px]'>
              <span className='font-inter font-normal text-sm leading-[17px] text-[rgba(0,0,0,0.75)] w-[41px] h-[17px]'>
                Show
              </span>
              <span className='font-inter font-normal text-sm leading-[17px] text-[rgba(0,0,0,0.75)] w-[41px] h-[17px]'>
                10
              </span>
              {/* SVG */}
            </div>
            <div className='flex flex-row justify-center items-center gap-[15px] w-[153px] h-[17px]'>
              <span className='font-inter font-normal text-sm leading-[17px] text-[rgba(0,0,0,0.75)] w-[53px] h-[17px]'>
                Sort by:
              </span>
              <span className='font-inter font-normal text-sm leading-[17px] text-[rgba(0,0,0,0.75)] w-[59px] h-[17px]'>
                Featured
              </span>
              {/* SVG */}
            </div>
          </div>
          <div className='flex flex-row justify-center items-center pb-[50px] w-[1280px] h-[1430px]'>
            <div className='flex flex-row items-start w-[320px] h-[1380px]'>
              <div className='flex flex-col items-start p-[0,0,40px] gap-[10px]'>
                <div className='w-[249px] h-[21px]'>
                  <div className='top-[0px]  flex flex-col items-start px-[2px] py-[10px] absolute w-[80px] h-[21px] left-[173px] border-[1px] border-dashed border-[#000000] rounded-[40px]'>
                    <span className='font-inter font-normal text-sm leading-[17px] text-[rgba(0,0,0,0.75)] w-[60px] h-[17px]'>
                      Self Help
                    </span>
                  </div>
                  <div className='top-[0px] flex flex-col items-start px-[2px] py-[10px] absolute w-[76px] h-[21px] left-[87px] border-[1px] border-dashed border-[#000000] rounded-[40px]'>
                    <span className='font-inter font-normal text-sm leading-[17px] text-[rgba(0,0,0,0.75)] w-[60px] h-[17px]'>
                      Author 1
                    </span>
                  </div>
                  <div className='top-[0px]  flex flex-col items-start px-[2px] py-[10px] absolute w-[77px] h-[21px] left-[0px] border-[1px] border-dashed border-[#000000] rounded-[40px]'>
                    <span className='font-inter font-normal text-sm leading-[17px] text-[rgba(0,0,0,0.75)] w-[60px] h-[17px]'>
                      Selected
                    </span>
                  </div>
                </div>
                <div className='flex flex-col items-start px-[2px] py-[10px] w-[56px] h-[21px] border-dashed border-[#000000] rounded-[40px]'>
                  <span className='font-inter font-normal text-sm leading-[17px] text-[rgba(0,0,0,0.75)] w-[60px] h-[17px]'>
                    Sci Fi
                  </span>
                </div>
                <span className='w-[54px] h-[17px] font-inter font-normal text-sm border-b-1 border-[#298Fc2]'>
                  Clear all
                </span>
              </div>
              <div className='flex flex-col items-start pb-[40px] w-[320px] h-[240px]'>
                <div className='flex flex-row items-center px-[8px] gap-[10px] w-[320px] h-[40px] border-b-[1px] border-solid border-[rgba(0,0,0,0.3)] '>
                  <span className='font-inter font-semibold text-sm leading-[17px] w-[35px] h-[17px]'>
                    Price
                  </span>
                </div>

                <div className='flex flex-col items-start pt-[20px] gap-[20px] w-[320px] h-[160px]'>
                  <div className='flex flex-row items-center w-[320px] h-[21px]'>
                    <div className='w-[160px] h-[21px]'>
                      <div className='flex flex-col items-start px-[2px] py-[10px] absolute w-[77px] h-[21px] left-0 top-0 border-[1px] border-dashed border-[#000000] rounded-[40px] '>
                        <span className='font-inter font-normal text-sm text-[rgba(0,0,0,0.75)] w-[57px] h-[17px]'>
                          selected
                        </span>
                      </div>
                    </div>

                    <div className='flex flex-row justify-end items-center gap-[10px] w-[160px] h-[21px]'>
                      <span className='w-[38px] h-[17px] font-inter font-normal text-sm border-b-1 border-[#298Fc2]'>
                        Reset
                      </span>
                    </div>
                  </div>

                  <div className='flex flex-row justify-center items-center gap-[30px] w-[320px] h-[44px]'>
                    <div className='flex flex-row justify-end items-center gap-[5px] w-[120px] h-[44px]'>
                      <span className='font-inter font-normal text-base w-[11px] h-[24px]'>
                        $
                      </span>
                      <div className='flex flex-col items-start gap-[10px] w-[90px] h-[44px]'>
                        <div className='flex flex-row items-center px-[10px] py-[14px] gap-2 w-[90px] h-[44px] border-[1px] border-solid bg-white border-[#000000] shadow-[0,1px,2px,rgba(16,24,40,0.05)] rounded-lg'>
                          <span className='font-inter font-normal text-base text-[#667085] w-[62px] h-[24px]'>
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className='font-inter font-normal text-base text-black '>
                      To
                    </span>
                    <div className='flex flex-row justify-end items-center gap-[5px] w-[120px] h-[44px]'>
                      <span className='font-inter font-normal text-base w-[11px] h-[24px]'>
                        $
                      </span>
                      <div className='flex flex-col items-start gap-[10px] w-[104px] h-[44px]'>
                        <div className='flex flex-row items-center px-[10px] py-[14px] gap-2 w-[90px] h-[44px] border-[1px] border-solid bg-white border-[#000000] shadow-[0,1px,2px,rgba(16,24,40,0.05)] rounded-lg'>
                          <span className='font-inter font-normal text-base text-[#667085] w-[62px] h-[24px]'>
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-row justify-center items-center px-[10px] py-[18px] gap-[8px] w-[100px] h-[35px]'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ProductList
