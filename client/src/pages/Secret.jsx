import React, { useState, useEffect } from 'react';
import '../styles/Secret.css';

export default function Secret() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [daysSince, setDaysSince] = useState(0);
    const [monthsSince, setMonthsSince] = useState(0);

    useEffect(() => {
        const coll = document.getElementsByClassName("collapsible");
        for (let i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
                this.classList.toggle("active");
                const content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }

        const calculateTimeSince = () => {
            const startDate = new Date('2023-05-02');
            const currentDate = new Date();
            const timeDifference = currentDate - startDate;

            // Calculate days
            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            setDaysSince(daysDifference);

            // Calculate months
            let monthsDifference = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
            monthsDifference += currentDate.getMonth() - startDate.getMonth();
            if (currentDate.getDate() < startDate.getDate()) {
                monthsDifference--;
            }
            setMonthsSince(monthsDifference);
        };

        calculateTimeSince();
    }, [isAuthenticated]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === 'qya') {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password');
        }
    };

    return (
        <div className="container">
            {isAuthenticated ? (
                <div>
                    <h1 className="title">Welcome to the Secret Page!</h1>
                    <p class="pcounter" >{daysSince} days with you <br></br> {monthsSince} months with you</p>
                    <p>Written for qya:</p>
                    <button className="collapsible">1</button>
                    <div className="content">
                        <p>In the realm of infinite dreams, where words intertwine,
                            I, who is yours, let my verses align,
                            To paint a portrait of love's divine art,
                            For the one who brings light within my heart.
                        </p>
                    </div>
                    <button className="collapsible">2</button>
                    <div className="content">
                        <p>Oh, beloved, you are the melody of my soul,
                            A celestial symphony that makes me whole,
                            In your presence, time conceded its flight,
                            For every moment with you feels infinitely bright.
                        </p>
                    </div>
                    <button className="collapsible">3</button>
                    <div className="content">
                        <p>Your beauty, oh, it defies the mortal plane,
                            A radiant aura that forever shall reign,
                            No comparison can capture your essence true,
                            For your grace eclipses the sun's golden hue.
                        </p>
                    </div>
                    <button className="collapsible">4</button>
                    <div className="content">
                        <p>Each dawn awakens with your name on my lips,
                            A prayer whispered softly as the night gently slips,
                            Your eyes, two celestial orbs of tender grace,
                            Reflecting the depths of love's eternal embrace.

                            Like lavenders in full bloom, your charm unfurls,
                            Filling my world with fragrant, enchanting swirls,
                            Your touch, a gentle breeze on a summer's eve,
                            Leaving a trail of yearning I cannot conceive.

                            In the garden of passion, we wander, hand in hand,
                            Our souls dancing to love's sweet command,
                            Together, we traverse life's intricate maze,
                            United by a bond that time cannot erase.

                            In the tapestry of our love, let colors blend,
                            No ending in sight, for this love shall transcend,
                            Forever entwined, our hearts shall forever beat,
                            For in your embrace, my soul finds its eternal seat.

                            Oh, my beloved, never shall we part,
                            For you are the light guiding my heart,
                            In this poem, my love for you shall forever reside,
                            As someone who is fully enamored by you, I offer my heart's tide.


                        </p>
                    </div>
                    <button className="collapsible">5</button>
                    <div className="content">
                        <p>
                            In worlds obscured by twilights deep,
                            Where enchantment's spirit wanders, we'll keep,
                            An anecdote of love, ineffable and rare,
                            Where solace is found, embraces despair.

                            In twilight's shroud, you appear,
                            A beacon of light, dispelling all fear,
                            To you the one I love, beyond words and speech,
                            Whose essence, elusive, truth cannot reach.

                            Your presence brings solace, a soothing balm,
                            A refuge in life's chaotic storm,
                            You teach the heart the meaning of bliss,
                            Igniting flames of hope with a tender kiss.

                            In your eyes, the universe unfolds,
                            A thousand wonders, untold,
                            Your touch, a language beyond what we know,
                            Expressing love in whispers, soft and low.

                            You are the muse that ignites my soul,
                            With your warmth, they make me whole,
                            Through this life absence of light, they guide,
                            Illuminating pathways, side by side.

                            With every breath shared, a truth unfurls,
                            That life holds meaning, in all its swirls,
                            For in your presence, I’ve come to see,
                            The profound beauty of existence's decree.

                            Though words may falter, unable to express,
                            The depth of love that my heart does possess,
                            Embrace the enchanting mystery, my dear,
                            For within it, my love is infinitely sincere.


                        </p>
                    </div>
                    <button className="collapsible">6</button>
                    <div className="content">
                        <p>They say love starts as a feeling, but continuing it is a choice,
                            and I find myself choosing her day after day without any signs of changing.
                            But then I think to myself was it a decision, was it a choice.
                            Looking back I never chose to continue it to pursue it.
                            like how natural it is to breath,
                            I pursue you, wanted to be close to you without any thought process,
                            without any necessary decision making.

                        </p>
                    </div>
                    <button className="collapsible">7</button>
                    <div className="content">
                        <p>My life was empty before you stepped into it.
                            Beyond some miracle that I’ll never understand,
                            I got to keep you, and now, I’m only just beginning to understand what it means to truly want something.
                            I want to give you the world.
                            I want to give you everything so that you wont desire anything else but me. I want to comfort you.
                            I want to love you in every way possible.
                            let me be your muse, the reason you smile,
                            the place of comfort to cleanse your sorrow.

                        </p>
                    </div>
                    <button className="collapsible">8</button>
                    <div className="content">
                        <p>To the one I hold dear, let us weave more moments into the tapestry of our shared existence. Side by side, let's embark on the journey of life, seeking the culmination of our paths together. My heart yearns for countless tomorrows, an eternity of shared sunsets and sunrises.

                            May the sands of time never run dry for us, and may the chapters of our story stretch into an infinite narrative. With each passing day, my love for you deepens, a flame that refuses to be extinguished. You are the one who completes the melody of my heart, and I cherish the thought of countless harmonious years ahead.

                            In the garden of our love, may the blossoms of affection bloom ceaselessly, and may our connection flourish into an everlasting symphony. I love you, my beloved, and in your presence, I find the infinite warmth that sustains the very essence of my being. Let our love be a timeless dance, where every step is a testament to our enduring bond.
                        </p>
                    </div>
                    <button className="collapsible">9</button>
                    <div className="content">
                        <p>In these recent days, I've found solace in the enchanting canvases of the sky – the morning hues and the evening palettes. Yet, amid the breathtaking beauty, my thoughts are drawn to the yearning for your presence. I imagine sharing these celestial wonders with you, watching, and admiring the skies together, as if they were a reflection of the shared canvas of our emotions.

                            You are the one I crave to share my happiness, joy, and even the nuances of my sorrows with. Each passing day feels like a delicate etching on the calendar, and I find myself counting the moments until our paths converge once again. Time seems to linger, and every second apart becomes an ache, a yearning for the day when our lives intertwine once more.

                            I await with anticipation for that moment when we can be side by side, under the same sky, breathing in the same air. Until then, the skies serve as a reminder of the vastness of our connection, spanning the distance and promising a reunion filled with the richness of shared moments.</p>
                    </div>
                    <button className="collapsible">10</button>
                    <div className="content">
                        <p>Your words paint a portrait of profound love and admiration, woven with the threads of longing and fulfillment. From the distant horizon where admiration blossomed to the present, where your presence completes my world, your love shines brightly like the morning sun, illuminating my days with warmth and vibrancy.

                            Like the darkened skies yielding to the brilliance of a shining star, your presence illuminates even the darkest corners of my heart, bringing light and hope. To me, you embody the epitome of beauty, a radiant beacon that guides me through life's journey.

                            With you by my side, love flows effortlessly, like a gentle breeze caressing my soul. You are my heart, my soul, and in your embrace, I find the purest form of love. You are the brightest star in my sky, and you are the only thing I desire. I love you with all that I am.</p>
                    </div>
                    <button className="collapsible">11</button>
                    <div className="content">
                        <p>
                            Your words resonate with the depth of an ocean, each sentiment a wave crashing against the shores of my heart. To fall for you countless times, every day, every second, is to surrender willingly to the irresistible pull of your love. You are the anchor that keeps me grounded, the tether that binds my soul to yours.

                            In your presence, time seems to stand still, and every moment becomes a treasure to cherish. I long for nothing more than to be with you, to bask in the warmth of your love and the radiance of your smile. With you, I am my truest self, my happiest self.

                            Even in moments of disagreement, my love for you remains unwavering, a constant beacon guiding me back to your embrace. Every thought is consumed by you, every heartbeat a testament to the depth of my affection. You are the one I want, the one I need, now and forevermore. I love you with every fiber of my being.</p>
                    </div>
                    <button className="collapsible">12</button>
                    <div className="content">
                        <p>
                            Since meeting you, the world has blossomed with newfound beauty, each moment painted in hues of wonder and gratitude. How I came to be blessed with the most exquisite soul, I may never comprehend. You are a marvel, a radiant presence that illuminates my days with joy and awe.

                            Your wonder and magnificence leave me breathless, and my heart overflows with love for you. Dear, I love you endlessly, and I love you more with each passing day. Thank you for gracing my life with your presence, for being my guiding light and my source of endless joy.</p>
                    </div>
                    <button className="collapsible">13</button>
                    <div className="content">
                        <p>
                            Love is like the echo of our souls, a resonant melody that never fades, flowing endlessly when reciprocated. Each beat of my heart carries a whisper of my devotion to you, a love that is eternal and unwavering. With every breath I take, I pledge my fidelity and truthfulness to you, my beloved.

                            Your absence leaves an ache in my heart, a longing that words cannot fully capture. I miss you profoundly, with an intensity that grows with each passing day. The thought of us being together, under one roof, fills me with hope and anticipation. I dream of the day when we can share the same space, bask in each other’s presence, and build a life woven with moments of joy and tenderness.

                            Until that day arrives, know that my love for you remains steadfast and true. You are my constant, my anchor in the storm, and my greatest source of happiness. I look forward to the day when distance is no longer a barrier, and we can create a home together, filled with the warmth of our love and the promise of forever.</p>
                    </div>
                    <button className="collapsible">14</button>
                    <div className="content">
                        <p>
                            Under the moon's gentle gaze, I whisper your name every night, a tender invocation of a future where we will be forever entwined. With each murmur, I yearn for the day when our togetherness draws nearer, like the stars adorning the night sky, embellishing my life with beauty beyond compare.

                            In your presence, joy and happiness envelop me, casting away shadows of loneliness. You radiate a warmth that not even the sun can rival, and your very essence ignites a fire within my soul.

                            Every word that escapes your lips is a symphony, a melody that resonates deep within my heart. I hang on to each syllable, like a precious gift bestowed upon me, for in your voice, I find solace and comfort, a refuge from the cacophony of the world.

                            As the moon and stars accompany me through the darkness of night, you are the luminary that guides me through life's uncertainties. Your presence brings light to the darkest corners of my soul, illuminating the path ahead with the promise of happiness that knows no bounds.

                            And so, as I whisper your name to the moon, I do so with the conviction that our destinies are intertwined, moving steadily closer with each passing night. For you are my North Star, my guiding light, and the source of endless joy that enriches my existence with boundless grace.
                        </p>
                    </div>
                    <button className="collapsible">15</button>
                    <div className="content">
                        <p>
                            In the vast symphony of existence, you are woven into every element of this world. Like cascading waves and flowing water, you permeate my consciousness, leaving no corner untouched by your presence. Even the lights that adorn the sky seem to reflect your essence, reminding me of your radiance.

                            No matter the scale, from the tiniest details to the grandest vistas, you are ever-present in my thoughts. Your image etched into my mind like an indelible painting, and with every passing moment, I find myself consumed by thoughts of you.

                            Time has no power to erase you from my heart; you are a constant, an ever-burning flame that warms my soul. Each second that passes, you remain the focal point of my consciousness, an irreplaceable part of my being.

                            In every aspect of this world, you are the melody that resonates within me. My thoughts are an eternal serenade to the beauty of your existence, like a poet captivated by their muse.

                            As the world revolves around its axis, my thoughts revolve around you, a never-ending orbit that binds us together. You are the gravity that anchors me, the force that keeps me grounded, yet lifts me to heights I never knew existed.

                            I see you, not merely with my eyes, but with my heart, in every moment that unfolds before me. Your presence weaves through the fabric of my life, and in your absence, I yearn for the touch of your spirit upon mine.

                            You are the thread that ties my soul to the world, the whisper in the wind, and the essence of everything I hold dear. Like a masterpiece painted upon the canvas of my life, you have become an inseparable part of me, and my thoughts, like a gentle river, flow endlessly towards you.
                        </p>
                    </div>
                    <button className="collapsible">16</button>
                    <div className="content">
                        <p>
                            Your presence in my life goes beyond mere liking; it has etched its way into the very fabric of my heart. You are the light that illuminates my days, the star that guides me through the darkest nights. Your existence propels me forward, filling my world with joy that flows effortlessly, as if destined by fate.

                            Just as the sun rises each morning and sets at dusk, my admiration for you knows no bounds and knows no end. May this affection blossom like an evergreen garden, flourishing with each passing moment we share, each memory we create. Together, let us forge a path with no limits, where we can revel in the beauty of our connection.

                            You bring me happiness so naturally, like a flower blooming under the gentle caress of the sun. It is in your presence that I find comfort, solace, and a sense of belonging that I have never experienced before. You have become the center of my world, and I am grateful for the warmth you bring to my life.

                            With you by my side, every day feels like a celebration, a symphony of laughter and joy that harmonizes perfectly. I want nothing more than to be with you, to share this journey of life together, embracing each moment as it unfolds.

                            You are my light, my joy, my reason to smile, and I am filled with gratitude for the gift of your affection. Together, let us create a story that transcends the boundaries of time, a tale of two hearts intertwined, forever entwined in the intricacies of life.
                        </p>
                    </div>
                    <button className="collapsible">17</button>
                    <div className="content">
                        <p>
                            Nothing in this vast universe can hold a candle to your brilliance. Your presence holds an irreplaceable value, and the desire to have you in my life burns within me so profoundly.

                            As I peer into the horizon of possibilities, I see no version of the future that doesn't include you. You've become an integral part of my dreams, my hopes, and my aspirations. Your place in my life is a puzzle piece that fits so perfectly, creating a picture that I can't imagine without you.

                            Just as the moonlight bathes the night in its gentle glow, you grace my life with your luminance. Your presence is a guiding star that leads me through life's uncertainties, and your absence leaves a void that nothing else can fill.

                            You are not just a person; you are my confidante, my muse, and the embodiment of all that I hold dear. My heart longs for your companionship, and I can't help but yearn for the future where we walk hand in hand, facing life's journey together.

                            my heart, you've found your place, and in my life, you've become an indelible chapter. With every beat of my heart, with every thought I possess, you remain the focal point, the shining star that guides my path. There's no future I envision, no dream I hold, that doesn't have you at its center.
                        </p>
                    </div>
                    <button className="collapsible">18</button>
                    <div className="content">
                        <p>
                        you are my most cherished bundle of joy, an effervescent source of radiant light that I fervently seek in the midst of even the darkest shadows. You are the one with whom I yearn to traverse the journey of life, as my sun brightens the day, my moon serenades the night, and my guiding star illuminates the path ahead. With you, I find completeness — you are not just a part of my world, but its very essence.
                        </p>
                    </div>
                    <button className="collapsible">19</button>
                    <div className="content">
                        <p>
                        My love for you extends beyond the boundaries of description, encompassing the entirety of your being, from the deepest recesses of your soul to the warmth that radiates from your very core. You are cherished in a way that's reminiscent of the sun's comforting presence during the coldest days of winter. Your ability to provide warmth knows no bounds, and your light shines with a clarity that seems endless. In my heart, you are not just a love, but the very essence of it, my beating heart, and my dearest treasure.
                        </p>
                    </div>
                    <button className="collapsible">20</button>
                    <div className="content">
                        <p>
                        My love for you knows no bounds, an all-encompassing emotion that compels me to desire your presence by my side at every turn. The moments when you're not with me are filled with an overwhelming sense of longing, a deep ache that reflects just how much I miss you. You are a constant presence in my thoughts, an unwavering presence that occupies my mind every hour of every day, 24/7.
                        </p>
                    </div>
                    
                </div>
            ) : (
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password..."
                        className="form__input"
                        required
                    />
                    <button className="form__button" type="submit">
                        Enter
                    </button>
                </form>
            )}
        </div>
    );
}
