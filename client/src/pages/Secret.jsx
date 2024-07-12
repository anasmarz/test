import React, { useState, useEffect } from 'react';
import '../styles/Secret.css';

export default function Secret() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [daysSince, setDaysSince] = useState(0);

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

        const calculateDaysSince = () => {
            const startDate = new Date('2023-05-02');
            const currentDate = new Date();
            const timeDifference = currentDate - startDate;
            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            setDaysSince(daysDifference);
        };

        calculateDaysSince();
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
                    <p class = "pcounter" >{daysSince} days with you</p>
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
