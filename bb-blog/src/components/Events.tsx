
import assets from '../assets/asset'

const Events = () => {
  return (
    <section id='events' className='m-auto w-[95%]'>
        <div className="our-courses"> 
        <hr /> 
      <span className='instrument-serif-regular text-xl'>Upcoming Events</span>
      <hr /> 
       </div>

       <section className="flex items-center justify-center h-auto p-5">
        <div className="flex flex-col lg:flex-row max-w-[1200px] w-full ">

        <div className="flex-1 flex  flex-col justify-center ">
           
           <span className="instrument-serif-regular1 bg-[#ABDFFF] rounded-l-sm p-5 mb-3">
    <h3 className='text-center text-xl font-semibold'>Reconnect, Revitalize, and Recommit</h3>
    <p className='text-center instrument-serif-regular1 text-sm mb-5'>Theme: WATCH AND PRAY </p>
    <p className='text-xl mb-3'>The Battalion Council invites all Steadfast fellows to: 2025 Rededication & Flag-Off Ceremony
    Revalidation of Council Honorary Patrons.</p>
    <p className='text-[15px]'>
    Date:- Sunday 9th March, 2025 </p>
<p className='text-[15px]'>Time:- 9am</p>
<p className='text-[15px]'>Location:- Welsey Methodist Church, No 1 Harbour Road, Ph.
    </p>

</span>


         </div>

          <div className="flex-1 m-auto max-w-[600px] justify-center items-center flex flex-col">
            <img className='w-full rounded-xl' src={assets.image6} alt="news1" />
          </div>

          
        </div>
       </section>
    </section>
  )
}

export default Events