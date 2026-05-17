import React, { useEffect, useMemo, useState } from "react";
import { CalendarDays, Heart, MapPin, MessageCircle, Music, Sparkles, Volume2, VolumeX } from "lucide-react";

const h = React.createElement;
const weddingDate = new Date("2026-06-27T20:00:00+05:30");
const heroImage = new URL("./assets/opening.jpg", import.meta.url).href;
const coupleMainImage = new URL("./assets/couple-main.jpeg", import.meta.url).href;
const coupleHandImage = new URL("./assets/couple-hand.jpeg", import.meta.url).href;
const coupleRingImage = new URL("./assets/couple-rings-1.jpeg", import.meta.url).href;
const haldiImage = new URL("./assets/haldi.jpg", import.meta.url).href;
const mehendiImage = new URL("./assets/mehandi.jpg", import.meta.url).href;
const weddingImage = new URL("./assets/wedding.jpg", import.meta.url).href;
const musicTrack = new URL("./assets/music.mp3", import.meta.url).href;

const eventImages = [
  {
    title: "हल्दी",
    date: "25 जून",
    time: "हल्दी की पावन रस्म, स्नेहिल मुस्कानें और मंगल आशीर्वादों से सजी शुभ बेला।",
    image: haldiImage,
    offset: "pt-40",
  },
  {
    title: "मेहंदी",
    date: "25 जून",
    time: "मेहंदी की रंगत, गीतों की मधुरता और अपनों के संग हर्षोल्लास की सुहानी संध्या।",
    image: mehendiImage,
    offset: "pt-40",
  },
  {
    title: "विवाह",
    date: "27 जून",
    time: "पवित्र फेरों, मंगल वचनों और दो परिवारों के शुभ मिलन का पावन अवसर।",
    image: weddingImage,
    offset: "pt-40",
  },
];

const eventDetails = [
  {
    title: "हल्दी समारोह",
    date: "गुरुवार, 25 जून · सुबह 11:00 बजे",
    address: ["172/1, आर्य नगर, ब्लॉक-2,", "शिव मंदिर के पास, देहरादून, उत्तराखंड"],
    accent: "gold",
    directions: "https://www.google.com/maps/search/?api=1&query=30.340556,78.063806",
  },
  {
    title: "मेहंदी संध्या",
    date: "गुरुवार, 25 जून · शाम 4:00 बजे",
    address: ["172/1, आर्य नगर, ब्लॉक-2,", "शिव मंदिर के पास, देहरादून, उत्तराखंड"],
    accent: "gold",
    directions: "https://www.google.com/maps/search/?api=1&query=30.340556,78.063806",
  },
  {
    title: "विवाह समारोह",
    date: "शनिवार, 27 जून · रात 8:00 बजे",
    address: ["आनंद भवन", "4, ओल्ड सर्वे रोड, करनपुर,", "देहरादून, उत्तराखंड 248001"],
    accent: "green",
    directions: "https://share.google/md5em3FuLxj9JEs7O",
  },
];

function useCountdown(targetDate) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return useMemo(() => {
    const diff = Math.max(targetDate.getTime() - now.getTime(), 0);
    const seconds = Math.floor(diff / 1000);

    return {
      days: Math.floor(seconds / 86400),
      hours: Math.floor((seconds % 86400) / 3600),
      minutes: Math.floor((seconds % 3600) / 60),
      seconds: seconds % 60,
    };
  }, [now, targetDate]);
}

function Icon(IconComponent, className = "", size = 19) {
  return h(IconComponent, { className, size, strokeWidth: 1.7 });
}

function FlyingBird({ className = "" }) {
  return h(
    "div",
    { className: `flying-bird pointer-events-none absolute z-10 h-10 w-16 text-[#2F6B45] ${className}` },
    h(
      "svg",
      { viewBox: "0 0 96 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true" },
      h("path", {
        className: "bird-left-wing",
        d: "M47 27C33 12 19 12 5 26C23 22 35 26 47 34Z",
        fill: "currentColor",
        opacity: "0.84",
      }),
      h("path", {
        className: "bird-right-wing",
        d: "M49 27C63 12 77 12 91 26C73 22 61 26 49 34Z",
        fill: "currentColor",
        opacity: "0.88",
      }),
      h("ellipse", {
        className: "bird-body",
        cx: "48",
        cy: "29",
        rx: "8.5",
        ry: "4.5",
        fill: "#C9A84C",
        opacity: "0.94",
      })
    )
  );
}

function WhatsAppIcon() {
  return h(
    "svg",
    { viewBox: "0 0 32 32", className: "h-5 w-5", fill: "currentColor", "aria-hidden": "true" },
    h("path", {
      d: "M16.02 3.2A12.62 12.62 0 0 0 5.1 22.14L3.4 28.8l6.82-1.6A12.61 12.61 0 1 0 16.02 3.2Zm0 22.9c-2.02 0-3.9-.58-5.5-1.6l-.39-.24-4.04.95 1-3.93-.25-.4a10.31 10.31 0 1 1 9.18 5.22Zm5.86-7.72c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.52-.16-.73.16-.22.32-.84 1.04-1.03 1.26-.19.22-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.6-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.38.49-.57.16-.19.22-.32.32-.54.11-.22.05-.41-.03-.57-.08-.16-.73-1.76-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.22 0-.57.08-.86.41-.3.32-1.14 1.11-1.14 2.71 0 1.6 1.17 3.15 1.33 3.37.16.22 2.3 3.52 5.57 4.93.78.34 1.38.54 1.86.69.78.25 1.49.21 2.05.13.63-.09 1.9-.78 2.17-1.53.27-.76.27-1.41.19-1.54-.08-.14-.3-.22-.62-.38Z",
    })
  );
}

function Eyebrow({ children }) {
  return h(
    "p",
    { className: "font-label text-[0.68rem] font-medium uppercase tracking-[0.08em] text-blush" },
    children
  );
}

function Section({ id, children, className = "" }) {
  return h(
    "section",
    { id, className: `relative px-5 py-16 ${className}` },
    h("div", { className: "mx-auto w-full" }, children)
  );
}

function Hero() {
  return h(
    "header",
    { className: "relative min-h-[100svh] overflow-hidden bg-ivory text-espresso" },
    h("img", {
      src: heroImage,
      alt: "आदेश और चंदा के विवाह आमंत्रण की आरंभिक कलाकृति",
      className: "opening-image absolute inset-0 h-full w-full object-cover object-center",
    }),
    h("div", { className: "absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-ivory via-ivory/55 to-transparent" }),
    h(FlyingBird, { className: "-left-28 top-[16%]" }),
    h(FlyingBird, { className: "is-second -left-28 top-[23%] scale-75 opacity-80" }),
    h(FlyingBird, { className: "is-third -left-28 top-[11%] scale-90 opacity-85" }),
    h(
      "div",
      { className: "absolute inset-x-0 top-0 z-10 px-5 py-6 sm:px-8" },
      h(
        "nav",
        { className: "mx-auto text-center font-label text-[0.72rem] font-medium tracking-[0.08em] text-maroon" },
        "॥ ॐ गणेशाय नमः ॥"
      )
    ),
    h(
      "div",
      { className: "absolute inset-x-0 bottom-12 z-10 px-6 text-center" },
      h(
        "p",
        { className: "opening-signature gold-gradient-text inline-block px-2 py-2 font-signature text-4xl font-semibold leading-[1.35] tracking-wide" },
        "आदेश एवं चंदा"
      )
    ),
    h("div", { className: "scroll-cue absolute bottom-3 left-1/2 z-10 h-10 w-px bg-gradient-to-b from-maroon/75 to-transparent" })
  );
}

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    audio.volume = 0.45;
    const tryPlay = () => {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    };

    tryPlay();
    window.addEventListener("pointerdown", tryPlay, { once: true });
    window.addEventListener("keydown", tryPlay, { once: true });

    return () => {
      window.removeEventListener("pointerdown", tryPlay);
      window.removeEventListener("keydown", tryPlay);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().then(() => setIsPlaying(true));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return h(
    React.Fragment,
    null,
    h("audio", {
      ref: audioRef,
      src: musicTrack,
      autoPlay: true,
      loop: true,
      playsInline: true,
      preload: "auto",
    }),
    h(
      "button",
      {
        type: "button",
        onClick: toggleMusic,
        className:
          "fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-gold/35 bg-ivory/70 text-maroon/70 shadow-[0_10px_30px_rgba(44,24,16,0.08)] backdrop-blur-md transition duration-300 hover:bg-ivory hover:text-maroon",
        "aria-label": isPlaying ? "संगीत रोकें" : "संगीत चलाएं",
      },
      isPlaying ? Icon(Volume2, "", 17) : Icon(VolumeX, "", 17)
    )
  );
}

function InvitationDetails() {
  return h(
    Section,
    { id: "invitation", className: "bg-ivory py-6 text-espresso" },
    h(
      "div",
      { className: "invitation-sequence px-4 py-8 text-center" },
      h("p", { className: "font-label text-[0.68rem] font-medium uppercase tracking-[0.08em] text-blush" }, "सपरिवार सादर आमंत्रित हैं"),
      h(
        "div",
        { className: "mt-9 space-y-7" },
        h(
          "div",
          null,
          h("p", { className: "gold-gradient-text font-signature text-5xl font-semibold leading-[1.15] drop-shadow-sm" }, "आदेश"),
          h("p", { className: "mt-2 font-body text-sm leading-7 text-text-mid" }, "सुपुत्र", h("br"), "श्री शिव किशोर चौरसिया एवं श्रीमती माया चौरसिया")
        ),
        h(
          "div",
          { className: "flex items-center justify-center gap-4" },
          h("span", { className: "h-px w-12 bg-gold/45" }),
          h("span", { className: "font-display text-3xl italic text-gold-lt" }, "के संग"),
          h("span", { className: "h-px w-12 bg-gold/45" })
        ),
        h(
          "div",
          null,
          h("p", { className: "gold-gradient-text font-signature text-5xl font-semibold leading-[1.15] drop-shadow-sm" }, "चंदा"),
          h("p", { className: "mt-2 font-body text-sm leading-7 text-text-mid" }, "सुपुत्री", h("br"), "श्री विजय कुमार चौरसिया एवं श्रीमती सुशीला चौरसिया"),
          h("span", { className: "mx-auto mt-7 block h-px w-24 bg-[#c9a84c]/55" })
        )
      ),
      h(
        "p",
        { className: "mx-auto mt-6 max-w-[18rem] font-body text-base italic leading-8 text-text-mid" },
        "आपकी स्नेहिल उपस्थिति एवं आशीर्वाद की अभिलाषा में",
        h("br"),
        "कृपया पधारकर नवयुगल को अपना शुभाशीष प्रदान करें।",
        h("br"),
        h("span", { className: "font-label text-[0.68rem] uppercase tracking-[0.05em] text-gold-lt" }, "— सादर, परिवारजन")
      )
    )
  );
}

function Countdown() {
  const countdown = useCountdown(weddingDate);
  const numbers = [
    String(countdown.days).padStart(2, "0"),
    String(countdown.hours).padStart(2, "0"),
    String(countdown.minutes).padStart(2, "0"),
    String(countdown.seconds).padStart(2, "0"),
  ];

  return h(
    Section,
    { id: "countdown", className: "bg-[#f7f1e8] text-espresso" },
    h(
      "div",
      { className: "reveal text-cascade py-8 text-center" },
      h("p", { className: "countdown-heading font-label text-[0.66rem] uppercase tracking-[0.08em] text-blush" }, "शुभ विवाह की प्रतीक्षा"),
      h(
        "div",
        { className: "mt-8 flex items-baseline justify-center gap-1 font-display text-[3.2rem] font-normal leading-none text-maroon" },
        numbers.map((value, index) =>
          h(
            React.Fragment,
            { key: index },
            h("span", { className: "min-w-[3.9rem] tabular-nums" }, value),
            index < numbers.length - 1 ? h("span", { className: "text-3xl text-gold" }, ":") : null
          )
        )
      ),
      h(
        "div",
        { className: "mx-auto mt-5 grid max-w-[19rem] grid-cols-4 text-center font-label text-[0.65rem] uppercase tracking-[0.06em] text-gold" },
        h("span", null, "दिन"),
        h("span", null, "घंटे"),
        h("span", null, "मिनट"),
        h("span", null, "सेकंड")
      ),
      h("p", { className: "mt-12 font-label text-[0.68rem] uppercase tracking-[0.06em] text-text-mid" }, "27 जून · शनिवार · रात 8:00 बजे")
    )
  );
}

function CoupleGallery() {
  return h(
    Section,
    { id: "story", className: "bg-ivory text-espresso" },
    h(
      "div",
      { className: "reveal text-cascade text-center" },
      h("p", { className: "font-label text-[0.68rem] font-medium uppercase tracking-[0.08em] text-blush" }, "स्मृतियों की झलक"),
      h("h2", { className: "mt-5 font-display text-4xl font-light leading-tight text-maroon" }, "प्रेम, विश्वास और एक नई शुरुआत"),
      h("p", { className: "mx-auto mt-6 max-w-[21rem] font-body text-lg leading-8 text-text-mid" }, "दो परिवारों के आशीर्वाद के बीच, यह साथ अब जीवन भर की सुंदर प्रतिज्ञा बनने जा रहा है।"),
      h(
        "div",
        { className: "mx-auto mt-10 grid max-w-[390px] gap-4" },
        h("img", {
          src: coupleMainImage,
          alt: "आदेश एवं चंदा",
          className: "gallery-feature h-[clamp(340px,62svh,520px)] w-full rounded-[8px] object-cover object-center shadow-luxury",
        }),
        h(
          "div",
          { className: "grid grid-cols-2 gap-4" },
          h("img", { src: coupleHandImage, alt: "युगल के हाथ", className: "h-40 w-full rounded-[8px] object-cover object-center shadow-[0_14px_35px_rgba(20,43,32,0.12)]" }),
          h("img", { src: coupleRingImage, alt: "अंगूठियों की स्मृति", className: "h-40 w-full rounded-[8px] object-cover object-center shadow-[0_14px_35px_rgba(20,43,32,0.12)]" })
        )
      )
    )
  );
}

function EventImageSections() {
  return h(
    Section,
    { id: "celebrations", className: "bg-ivory text-espresso" },
    h(
      "div",
      { className: "grid gap-5" },
      eventImages.map((event) => {
        return h(
          "article",
          {
            key: event.title,
            className:
              "relative mx-auto h-[680px] max-w-[390px] overflow-hidden rounded-[8px] border border-gold/25 bg-ivory shadow-luxury",
          },
          h("img", {
            src: event.image,
            alt: `${event.title} celebration artwork`,
            className:
              "absolute inset-0 h-full w-full object-cover object-center",
          }),
          h("div", { className: "absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-ivory/95 via-ivory/72 to-transparent" }),
          h(
            "div",
            { className: `relative z-10 px-7 text-center ${event.offset}` },
            h("p", { className: "font-label text-[0.68rem] font-medium uppercase tracking-[0.08em] text-blush" }, event.date),
            h("h3", { className: "mt-2 font-display text-5xl font-light leading-none text-maroon" }, event.title),
            h("div", { className: "mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" }),
            h("p", { className: "mx-auto mt-2 max-w-[15rem] font-body text-lg italic leading-6 text-text-mid" }, event.time)
          )
        );
      })
    )
  );
}

function Events() {
  return h(
    Section,
    { id: "events", className: "bg-maroon text-ivory" },
    h(
      "div",
      { className: "reveal text-cascade mx-auto max-w-2xl text-center" },
      h("p", { className: "font-label text-[0.68rem] font-medium uppercase tracking-[0.08em] text-gold" }, "मंगल उत्सव"),
      h("h2", { className: "mt-5 font-display text-4xl font-light leading-tight text-ivory" }, "विवाह कार्यक्रम एवं स्थल"),
      h(
        "p",
        { className: "mx-auto mt-8 max-w-[20rem] font-body text-lg leading-8 text-ivory" },
        "आपकी उपस्थिति से प्रत्येक रस्म में मंगलता, प्रत्येक क्षण में अपनापन और इस शुभ अवसर में स्मरणीय सौंदर्य जुड़ जाएगा।"
      )
    ),
    h(
      "div",
      { className: "reveal-stagger mt-12 grid gap-5" },
      eventDetails.map((event) =>
        h(
          "article",
          {
            key: event.title,
            className: "rounded-[8px] border border-[#c9a84c]/15 border-l-2 border-l-[#c9a84c] bg-[#FAF6EF] px-7 py-8 text-left shadow-[0_18px_45px_rgba(44,24,16,0.08)]",
          },
          h(
            "div",
            { className: "flex flex-col gap-3" },
            h("h3", { className: "font-label text-sm font-medium uppercase tracking-[0.06em] text-blush" }, event.title),
            h("p", { className: "font-body text-base text-gold-lt" }, event.date)
          ),
          h(
            "div",
            { className: "mt-6 space-y-2.5 font-body text-lg leading-8 text-text-mid" },
            event.address.map((line) => h("p", { key: line }, line))
          ),
          h(
            "a",
            {
              href: event.directions,
              target: "_blank",
              rel: "noreferrer",
              className: "mt-8 inline-flex items-center gap-2 border-b border-gold/55 pb-1 font-label text-[0.68rem] uppercase tracking-[0.06em] text-blush",
            },
            Icon(MapPin, "", 14),
            "मार्ग देखें"
          )
        )
      )
    )
  );
}

function RSVP() {
  const message = encodeURIComponent("नमस्ते, आदेश एवं चंदा के शुभ विवाह समारोह में मेरी उपस्थिति की पुष्टि स्वीकार करें।");

  return h(
    Section,
    { id: "rsvp", className: "bg-ivory text-espresso" },
    h(
      "div",
      { className: "reveal text-cascade mx-auto max-w-3xl rounded-[8px] border border-gold/35 px-5 py-10 text-center shadow-[0_18px_55px_rgba(44,24,16,0.06)]" },
      Icon(Heart, "mx-auto text-gold", 34),
      h("h2", { className: "mt-6 font-display text-4xl font-light leading-tight text-maroon" }, "आपका आशीर्वाद ही हमारा सौभाग्य है।"),
      h("p", { className: "mx-auto mt-6 max-w-2xl font-body text-lg leading-9 text-text-mid" }, "कृपया अपनी उपस्थिति की पुष्टि कर हमें अनुग्रहित करें, ताकि स्वागत की प्रत्येक व्यवस्था स्नेहपूर्वक पूर्ण की जा सके।"),
      h(
        "a",
        {
          href: `https://wa.me/917030582940?text=${message}`,
          target: "_blank",
          rel: "noreferrer",
          className: "mt-9 inline-flex items-center justify-center gap-3 rounded-[8px] bg-maroon px-8 py-4 font-label text-sm font-medium uppercase tracking-[0.05em] text-ivory shadow-luxury transition duration-300 hover:-translate-y-0.5 hover:bg-espresso",
        },
        h(WhatsAppIcon),
        "व्हाट्सऐप द्वारा पुष्टि करें"
      )
    )
  );
}

function Footer() {
  return h(
    "footer",
    { className: "text-cascade bg-ivory px-5 py-12 text-center sm:px-8" },
    h("p", { className: "gold-gradient-text font-signature text-4xl font-semibold leading-[1.2]" }, "आदेश एवं चंदा"),
    h(
      "div",
      { className: "mx-auto mt-4 flex w-44 items-center justify-center gap-3 text-gold" },
      h("span", { className: "h-px flex-1 bg-[#c9a84c]/65" }),
      h("span", { className: "font-label text-[0.68rem] leading-none text-[#c9a84c]/80" }, "★"),
      h("span", { className: "h-px flex-1 bg-[#c9a84c]/65" })
    ),
    h("p", { className: "mx-auto mt-4 max-w-2xl font-body text-lg font-normal leading-8 text-text-mid" }, "समस्त परिवार के आशीर्वाद सहित, हम आपको पवित्र वचनों, मंगल परंपराओं और प्रेम से सजे इस शुभ विवाह उत्सव में सादर आमंत्रित करते हैं।")
  );
}

export default function App() {
  useEffect(() => {
    const targets = document.querySelectorAll(".reveal, .reveal-stagger, .text-cascade, .invitation-sequence");
    const scrollToHash = () => {
      if (!window.location.hash) return;
      const target = document.querySelector(window.location.hash);
      if (target) target.scrollIntoView({ block: "start" });
    };

    const markVisibleTargets = () => {
      targets.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.92 && rect.bottom > window.innerHeight * 0.08;
        if (isInView) item.classList.add("is-visible");
      });
    };
    const handleHashChange = () => {
      scrollToHash();
      markVisibleTargets();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.18 }
    );

    targets.forEach((item) => observer.observe(item));
    window.requestAnimationFrame(() => {
      scrollToHash();
      markVisibleTargets();
    });
    window.setTimeout(() => {
      scrollToHash();
      markVisibleTargets();
    }, 250);
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", markVisibleTargets, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", markVisibleTargets);
    };
  }, []);

  return h(React.Fragment, null, h(MusicPlayer), h(Hero), h("main", null, h(InvitationDetails), h(Countdown), h(CoupleGallery), h(EventImageSections), h(Events), h(RSVP)), h(Footer));
}












