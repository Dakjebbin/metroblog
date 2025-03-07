import { useState } from "react"
import assets from "../assets/asset"


const News = () => {
  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }
  return (
    <section id='news' className='m-auto w-[95%]'> 
       <div className="our-courses"> 
        <hr /> 
      <span className='instrument-serif-regular text-xl'>NEWS</span>
      <hr /> 
       </div>

       <section className="flex items-center justify-center h-auto p-5">
        <div className="flex flex-col lg:flex-row max-w-[1200px] w-full gap-2">
          <div className="w-[300px] m-auto max-w-[600px] justify-center p-5 items-center flex flex-col">
            <img className='w-full rounded-xl h-[300px] object-contain' src={assets.image5} alt="news1" />
          </div>

          <div className="flex-1 flex flex-col justify-center ">
            <p className="instrument-serif-regular1 font-bold text-xl">
            Bro. Solomon .T. Job NTO talks on his last Re-dedication as Council Secretary
            </p>
            <h3 className="inter my-3 font-bold ">
              WHAT IS RE-DEDICATION?
            </h3>
            <p className="inter text-sm mb-3">
          

In the Bible, re-dedication is the act of recommitting to God or a cause. It can also mean
restoring something to its rightful place.
Re-dedication is a decision made by a Christian to return to God and follow him more fully. It can
be a way to reconnect with God after a period of separation or sin.
Re-dedication can involve acknowledging sins and turning away from them.
It can also involve confessing that Jesus is Lord and believing in his resurrection.
Re-dedication can be expressed through prayer.
Re-dedication can mean committing to a cause, enterprise, or activity.
For example, a church can rededicate itself to God.
<br />
</p>

  <p className="inter text-sm">
It can be an effective way to help people realize that Jesus&#39; forgiveness is for all of us.
There are two common scenarios in which people rededicate their lives to Christ. The most
common is that of an older child or young adult who accepted Christ at a young age. After years
of going to church and living through the influence of his parents&#39; faith, he/she may realize their
own faith is stagnant and underdeveloped. They may have never taken responsibility for their
relationship with Jesus, or may actually be living a sinful lifestyle. They come to the realization
that despite the fact he is a Christian, they want a stronger Christian life. So they rededicate
their lives to Christ, taking a leap in maturity and restarting their Christian growth.
Romans 12:1-2 “Therefore I urge you, brethren, by the mercies of God, to present your bodies a
living and holy sacrifice, acceptable to God, which is your spiritual service of worship. And do
not be conformed to this world, but be transformed by the renewing of your mind, so that you
may prove what the will of God is, that which is good and acceptable and perfect.”
Numbers 6:12 They must rededicate themselves to the LORD for the same period of dedication
and must bring a year-old male lamb as a guilt offering. The previous days do not count,
because they became defiled during their period of dedication.
So when you say you want to go for Re-dedication, you have to realize that you&#39;re a sinner, and
then cleanse yourself of every iniquity. 1 John 1:8 If we say that we have no sin, we deceive
ourselves, and the truth is not in us. 1:9 If we confess our sins, he is faithful and just to forgive
us our sins, and to cleanse us from all unrighteousness. This is the first step to re-dedication.

</p>

{showMore ? <span className=" inter text-sm">
<h3 className="font-bold my-3">WHY IS RE-DEDICATION IMPORTANT?</h3>

<ol className="list-decimal">
<li> It renews our love for Christ: Re-dedication is a way to reject sin and renew a love for Christ.</li>
<li> It Restores fellowship with God: God receives those who return to Him, cleanses them from
sin, and restores them to fellowship with Him.</li>
<li>Demonstrates commitment: Re-dedication is a way to demonstrate a commitment to living
for Christ.</li>

</ol>

<h4 className="font-bold my-2 text-xl">OUR THEME FOR 2025, WATCH AND PRAY</h4>

<p>

In the Bible, Watch and Pray means to be alert and connected to God so you can resist
temptation and overcome sin. It&#39;s a way to be aware of the enemy schemes and to receive
Gods strength.

To watch and pray means to be awake and on guard all our waking hours so that we can see
when sin is at the door, desiring to entrap us. (Genesis 4:7) It means that we have a constant
connection with God; that we seek Him for power to overcome all sin. “Watch and pray that
you may not enter into temptation.

WATCHING OR BEING ON GUARD FOR ENEMY ATTACKS
The concept of watching is borrowed by analogy from the soldier guarding against an enemy
attack. His duty is to sound an alarm if he sees the enemy coming. This applies to the approach
we should take to guarding against our adversary Satan the devil and his spiritual attacks. Jesus
commanded His disciples in Matthew 26:41, “Watch and pray, lest you enter into temptation.”
The reason Satan is so effective at influencing humans to sin is that humans are generally
unsuspecting of Satan’s attacks.

</p>
<h4 className="font-bold my-2">What does it mean to Watch and PRAY?</h4>
<p>
 It means to communicate with a deity or higher power through
spoken or silent words, usually expressing gratitude, asking for help or guidance, or making a
request in a humble manner; essentially, it”s an act of addressing a god or spiritual being with
adoration, confession, or supplication depending on the religious context.

PRAYER is an invocation or act that seeks to activate a rapport with an object of worship
through deliberate communication. In the narrow sense, the term refers to an act of
supplication or intercession directed towards a deity or a deified ancestor.
Different forms of prayer:
People can pray aloud, silently, through specific rituals, or by simply focusing their thoughts on
a higher power.
Purpose of prayer:
Prayers can be used to express thanks, ask for blessings, seek forgiveness, or request guidance
in difficult situations.

<h3 className="font-bold text-xl my-3">OUR EXPECTATIONS FOR 2025</h3>

As we prepare to present ourselves for Re-dedication for this new administrative year, may we first re-
examine ourselves and repent of all our sins. Because our God cannot behold evil/iniquity. Let our sins
not be an hindrance to our prayers.
As our theme says, we should Watch and Pray. Let us all be on guard and optimistic to the our goals and
expectations. As we obey Gods word to watch and pray, the plans and plots of the devil and his
advocates will be brought to nothing. And well enjoy the blessings as promised in Deuteronomy 28:1-
12 And it shall come to pass, if thou shalt hearken diligently unto the voice of the LORD thy God, to
observe and to do all his commandments which I command thee this day, that the LORD thy God will set thee on high above all nations of the earth.
            </p>
            </span> : null}
            <div className="flex items-center justify-center mt-4">
{!showMore ? <button onClick={toggleShowMore} className="inter cursor-pointer outline-none bg-[#ABDFFF] p-2 rounded-md font-semibold animate-pulse shadow-md shadow-black">See more</button> : <button onClick={toggleShowMore} className="inter cursor-pointer outline-none bg-[#ABDFFF] p-2 rounded-md font-semibold animate-pulse shadow-md shadow-black">See less</button>}
</div>
          </div>
        </div>
       </section>
    </section>
  )
}

export default News