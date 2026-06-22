// @ts-nocheck
"use client";
import { useEffect } from "react";

const HTML = `<!-- NAV -->
<nav>
  <div class="links">
    <a href="case-study-artisan.html">Case Studies</a><a href="resources.html">Blog</a><a href="resources.html">Resources</a><a href="about.html">About</a><a href="sample-outputs.html">Sample Videos</a>
  </div>
  <div class="brand"><img class="logo" src="/logo.svg" alt="GaanaAI"></div>
  <div class="right"><a class="reg" href="book-demo.html">Book a Demo</a></div>
  <button class="hamb" id="hamb" aria-label="Menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button>
</nav>
<div class="mobnav" id="mobnav">
  <a href="case-study-artisan.html">Case Studies</a>
  <a href="resources.html">Blog</a>
  <a href="resources.html">Resources</a>
  <a href="about.html">About</a>
  <a href="sample-outputs.html">Sample Videos</a>
  <a class="reg" href="book-demo.html">Book a Demo</a>
</div>

<!-- TAGLINE -->
<div class="tagline"><div class="t">Creative that makes your products <span class="serif-em">sell</span>.</div></div>

<!-- BANNER VIDEO (clean — no text overlay) -->
<section class="media hero-media">
  <video src="/videos/banner.mp4" autoplay muted loop playsinline></video>
</section>
<div class="trusted">
  <div class="wrap">
    <div class="tl">Trusted by ecommerce brands to turn catalogs into conversions</div>
    <div class="logomarquee">
      <div class="logotrack">
        <img src="/logos/unilever.png" alt="Unilever">
        <img src="/logos/unilever-food-t.png" alt="Unilever Food Solutions">
        <img src="/logos/epson.png" alt="Epson">
        <img src="/logos/pepsodent.png" alt="Pepsodent">
        <img src="/logos/sheaffer.png" alt="Sheaffer">
        <img src="/logos/langoor-t.png" alt="Langoor">
        <img src="/logos/furnishka.png" alt="Furnishka">
        <img src="/logos/i95dev.png" alt="i95Dev">
        <img src="/logos/unilever.png" alt="Unilever" aria-hidden="true">
        <img src="/logos/unilever-food-t.png" alt="" aria-hidden="true">
        <img src="/logos/epson.png" alt="" aria-hidden="true">
        <img src="/logos/pepsodent.png" alt="" aria-hidden="true">
        <img src="/logos/sheaffer.png" alt="" aria-hidden="true">
        <img src="/logos/langoor-t.png" alt="" aria-hidden="true">
        <img src="/logos/furnishka.png" alt="" aria-hidden="true">
        <img src="/logos/i95dev.png" alt="" aria-hidden="true">
      </div>
    </div>
  </div>
</div>

<!-- USE CASES / WHAT WE MAKE -->
<section class="band">
  <div class="wrap center">
    <span class="label">What we make</span>
    <h2 class="display" style="margin-top:18px;max-width:20ch;margin-left:auto;margin-right:auto">Three kinds of creative — all built to <span class="serif-em">sell</span>.</h2>
  </div>
  <div class="wrap cols3">
    <div class="uc">
      <div class="phone"><div class="pf pf-meta">
        <div class="mh"><span class="av">F</span><div><div class="nm">Flame King</div><div class="sp">Sponsored · 🌐</div></div><span class="dots">⋯</span></div>
        <div class="mtxt">Refuel, don't replace. The only refillable 1&nbsp;lb propane tank 🔥</div>
        <div class="pmedia"><video src="/videos/ad-flameking.mp4" autoplay muted loop playsinline></video></div>
        <div class="mcta"><div class="ct"><div class="u">flameking.com</div><div class="hl">Shop the Refillable Cylinder</div></div><span class="btn2">Shop Now</span></div>
        <div class="macts"><span>👍 Like</span><span>💬 Comment</span><span>↪ Share</span></div>
      </div></div>
      <h3>Ads Creation</h3>
      <p>High-performing ad creative built to convert. Hooks, pacing, and CTAs tuned for paid social — ready for Meta, TikTok, and Google.</p>
    </div>
    <div class="uc">
      <div class="phone"><div class="pf pf-amz">
        <div class="as"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f1111" stroke-width="2" stroke-linecap="round"><path d="M15 5l-7 7 7 7"/></svg><div class="bar"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg> Search Amazon</div></div>
        <div class="ar"><div class="lg"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3a7d2c" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/></svg></div><div style="min-width:0"><div class="nm">Artisan Variety</div><div class="vs">Visit the Store</div></div><div class="rt"><b>4.5</b> <span class="st">★★★★½</span><br>(318)</div></div>
        <div class="ap"><span class="p"><sup>$</sup>34<sup>99</sup></span><span class="pr">-20%</span></div>
        <div class="pmedia"><video src="/videos/pdp-artisan.mp4" autoplay muted loop playsinline></video></div>
        <div class="anav"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1111" stroke-width="1.6"><path d="M3 11l9-8 9 8M5 10v10h14V10"/></svg><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1111" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1111" stroke-width="1.6"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.5 12h11l2-8H6"/></svg><img src="/icons/amazon.svg" alt="Amazon"></div>
      </div></div>
      <h3>Product &amp; PDP Videos</h3>
      <p>On-brand product creative that sells on the page. Sync from Shopify, and we turn each SKU into assets that lift add-to-cart.</p>
    </div>
    <div class="uc">
      <div class="phone"><div class="pf pf-tt">
        <div class="ttop"><span class="off">Following</span><span class="on">For You</span></div>
        <div class="pmedia"><video src="/videos/ugc-laurageller.mp4" autoplay muted loop playsinline></video></div>
        <div class="trail">
          <span class="ic"><span class="pfp"></span></span>
          <span class="ic"><svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M12 21s-7-4.6-9.3-9C1 8.5 2.7 5 6 5c2 0 3.2 1.2 4 2.4C10.8 6.2 12 5 14 5c3.3 0 5 3.5 3.3 7C19 16.4 12 21 12 21z"/></svg>18.2K</span>
          <span class="ic"><svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M21 11.5a8.5 8.5 0 01-12 7.7L3 21l1.8-6A8.5 8.5 0 1121 11.5z"/></svg>402</span>
          <span class="ic"><svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>Share</span>
        </div>
        <div class="tcap"><div class="un">@laurageller</div><div class="cp">POV: flawless in 3 steps 💄 #laurageller #makeup #beauty</div><div class="mu">♪ original sound — laurageller</div></div>
      </div></div>
      <h3>UGC + AI</h3>
      <p>Authentic creator-style content at scale — without the casting or reshoots. Native to feed, built to drive sales.</p>
    </div>
  </div>
  <div class="wrap"><div class="actions">
    <a class="btn btn--accent" href="#"> Get your first video </a>
  </div></div>
</section>

<!-- FEATURE BLOCK 1 -->
<section class="media feature">
  <video src="/videos/feature.mp4" autoplay muted loop playsinline></video>
  <div class="scrim"></div>
  <div class="cap"><div class="inner">
    <div class="label eyebrow">Built to convert</div>
    <h2 class="display">Creative that does its job: <span class="serif-em">selling</span>.</h2>
    <p class="lede body">Every asset is built from your real products and brand kit, then refined by our creative team — so it's on-brand, accurate, and made to move product from the first pass.</p>
  </div></div>
</section>

<!-- HOW WE ARE BETTER -->
<section class="band">
  <div class="wrap center">
    <span class="label">The difference</span>
    <h2 class="display" style="margin-top:18px;max-width:20ch;margin-left:auto;margin-right:auto">Why ecommerce teams choose GaanaAI</h2>
    <div class="better">
      <div class="b">
        <span class="n">01</span>
        <span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.6L19.5 10l-5.6 1.4L12 17l-1.9-5.6L4.5 10l5.6-1.4L12 3z"/><path d="M19 14l.7 2.1L22 17l-2.3.9L19 20l-.7-2.1L16 17l2.3-.9L19 14z"/></svg></span>
        <h3>AI + Human Craft</h3>
        <p>The speed and scale of AI, with human creatives directing every output. You get more creative, without losing the taste that makes it sell.</p>
      </div>
      <div class="b">
        <span class="n">02</span>
        <span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5.5c0 4.3-2.9 7.3-7 8.5-4.1-1.2-7-4.2-7-8.5V6l7-3z"/><path d="M9 12l2.2 2.2L15.5 10"/></svg></span>
        <h3>No Hallucinations</h3>
        <p>Your product stays your product. We build from real assets, so labels, colors, and details are accurate — no melted logos, no invented features.</p>
      </div>
      <div class="b">
        <span class="n">03</span>
        <span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8.5 4.7L12 12.4 3.5 7.7 12 3z"/><path d="M3.5 12l8.5 4.7 8.5-4.7"/><path d="M3.5 16.3L12 21l8.5-4.7"/></svg></span>
        <h3>Brand Consistency</h3>
        <p>Your brand kit drives everything — fonts, palette, tone, ratios. Creative that's recognizably yours across every channel.</p>
      </div>
    </div>
  </div>
</section>

<!-- LIVE URLS / BRAND SHOWCASE (portrait carousel) -->
<section class="band paper" style="background:#fff">
  <div class="wrap">
    <div class="chead">
      <div>
        <span class="label">See it live</span>
        <h2 class="display" style="margin-top:18px">Real creative, on real channels.</h2>
        <p class="lede">Real creative, running on real brand channels. Tap through to the feeds.</p>
      </div>
      <div class="cnav">
        <button class="cbtn" data-dir="-1" aria-label="Previous"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></button>
        <button class="cbtn" data-dir="1" aria-label="Next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg></button>
      </div>
    </div>
    <div class="carousel" id="brandCarousel">
      <a class="bcard appcard" href="https://www.amazon.com/Earthwise-PetLawn-Seed-Mix-overseed/dp/B0FCSL1K4D?th=1" target="_blank" rel="noopener">
        <div class="asearch">
          <span class="bk"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></span>
          <div class="bar"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg> Search or ask a question<span class="rt"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="1.6"><rect x="3" y="6" width="18" height="14" rx="2"/><circle cx="12" cy="13" r="3.5"/></svg><svg width="15" height="17" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="1.6"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/></svg></span></div>
        </div>
        <div class="sponsor"><div class="sbox"><b>Scotts</b><span style="color:#007185">Shop Scotts ›</span></div><span class="smark">Sponsored ⓘ</span></div>
        <div class="astore">
          <div class="lg"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3a7d2c" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/></svg></div>
          <div style="min-width:0"><div class="nm">Earthwise Seed Company</div><div class="visit">Visit the Store</div></div>
          <div class="rate"><b>3.5</b> <span class="st">★★★½</span><br><span class="ct">(44)</span></div>
        </div>
        <div class="atitle">Earthwise PetLawn Alternative Lawn Seed – Organic Tall Fescue &amp; White Dutch Clover Blend, Pet Friendly, Drought Tolerant – 1/2 lb</div>
        <div class="aprice"><span class="p"><sup>$</sup>14<sup>99</sup></span><span class="was">$19.99</span><span class="pr">-25%</span></div>
        <div class="amedia"><img src="/assets/pdp-video-thumb.png" alt="Earthwise PetLawn Seed Mix"><div class="pbtn"><span><svg width="20" height="22" viewBox="0 0 20 22" fill="#0f1111"><path d="M0 0L20 11L0 22V0Z"/></svg></span></div></div>
        <div class="adots"><i class="d"></i><i class="d on"></i><i class="d"></i><i class="d"></i><i class="d"></i><div class="sp"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1111" stroke-width="1.6"><path d="M12 21s-7-4.6-9.3-9C1 8.5 2.7 5 6 5c2 0 3.2 1.2 4 2.4C10.8 6.2 12 5 14 5c3.3 0 5 3.5 3.3 7C19 16.4 12 21 12 21z"/></svg><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1111" stroke-width="1.6"><path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M12 3v13M7 8l5-5 5 5"/></svg></div></div>
        <div class="anav"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1111" stroke-width="1.6"><path d="M3 11l9-8 9 8M5 10v10h14V10"/></svg><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1111" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1111" stroke-width="1.6"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.5 12h11l2-8H6"/></svg><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1111" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg><img class="am" src="/icons/amazon.svg" alt="Amazon"></div>
      </a>
      <a class="bcard appcard" href="https://www.amazon.in/GADDA-CO-Butterfly-Spondylitis-20x12x2-5/dp/B0F5GTS777?th=1" target="_blank" rel="noopener">
        <div class="asearch">
          <span class="bk"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></span>
          <div class="bar"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg> Search Amazon.in<span class="rt"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="1.6"><rect x="3" y="6" width="18" height="14" rx="2"/><circle cx="12" cy="13" r="3.5"/></svg><svg width="15" height="17" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="1.6"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/></svg></span></div>
        </div>
        <div class="sponsor"><div class="sbox"><b>Sleepwell</b><span style="color:#007185">Shop now ›</span></div><span class="smark">Sponsored ⓘ</span></div>
        <div class="astore">
          <div class="lg" style="background:#efe6fb;color:#7a33ff;font-weight:700;font-size:14px">G</div>
          <div style="min-width:0"><div class="nm">GADDA.CO</div><div class="visit">Visit the Store</div></div>
          <div class="rate"><b>4.3</b> <span class="st">★★★★☆</span><br><span class="ct">(212)</span></div>
        </div>
        <div class="atitle">GADDA.CO Butterfly Cervical Pillow for Neck Pain &amp; Spondylitis Relief – Orthopedic Memory Foam Contour Pillow</div>
        <div class="aprice"><span class="p"><sup>₹</sup>1,299</span><span class="was">₹2,499</span><span class="pr">-48%</span></div>
        <div class="amedia"><video src="/videos/amz-gaddaco.mp4" autoplay muted loop playsinline></video></div>
        <div class="adots"><i class="d"></i><i class="d on"></i><i class="d"></i><i class="d"></i><div class="sp"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1111" stroke-width="1.6"><path d="M12 21s-7-4.6-9.3-9C1 8.5 2.7 5 6 5c2 0 3.2 1.2 4 2.4C10.8 6.2 12 5 14 5c3.3 0 5 3.5 3.3 7C19 16.4 12 21 12 21z"/></svg><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1111" stroke-width="1.6"><path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M12 3v13M7 8l5-5 5 5"/></svg></div></div>
        <div class="anav"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1111" stroke-width="1.6"><path d="M3 11l9-8 9 8M5 10v10h14V10"/></svg><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1111" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1111" stroke-width="1.6"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.5 12h11l2-8H6"/></svg><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1111" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg><img class="am" src="/icons/amazon.svg" alt="Amazon"></div>
      </a>
      <div class="bcard embed"><iframe src="https://www.instagram.com/p/DYzRSzugzLv/embed" loading="lazy" scrolling="no" allowtransparency="true"></iframe></div>
      <div class="bcard embed"><iframe src="https://www.instagram.com/p/DPvitbykW5N/embed" loading="lazy" scrolling="no" allowtransparency="true"></iframe></div>
      <div class="bcard embed"><iframe src="https://www.instagram.com/reel/DV1BcLsgfnn/embed" loading="lazy" scrolling="no" allowtransparency="true"></iframe></div>
    </div>
  </div>
</section>

<!-- SHOWCASE GRID -->
<section class="band">
  <div class="wrap">
    <div class="swhead">
      <div>
        <span class="label">Selected work</span>
        <h2 class="display" style="margin-top:18px;max-width:16ch">Creative that earns its <span class="serif-em">place</span>.</h2>
      </div>
      <a class="va" href="sample-outputs.html">View all work →</a>
    </div>
    <div class="tiles">
      <a class="tile" href="sample-outputs.html">
        <div class="media"><video src="/videos/work-jewellery.mp4" autoplay muted loop playsinline></video></div>
        <div class="tscrim"></div><div class="tblur"></div><span class="cat">Jewellery</span>
        <div class="ov"><div class="big"><span class="mtr">3.1×</span> ROAS</div><div class="sub">Launch creative — fragrance drop</div><span class="go">View case →</span></div>
      </a>
      <a class="tile" href="sample-outputs.html">
        <div class="media"><video src="/videos/work-apparel.mp4" autoplay muted loop playsinline></video></div>
        <div class="tscrim"></div><div class="tblur"></div><span class="cat">Beauty &amp; Apparel</span>
        <div class="ov"><div class="big"><span class="mtr">+18%</span> add-to-cart</div><div class="sub">PDP creative across 40 SKUs</div><span class="go">View case →</span></div>
      </a>
      <a class="tile" href="sample-outputs.html">
        <div class="media"><video src="/videos/work-pets.mp4" autoplay muted loop playsinline></video></div>
        <div class="tscrim"></div><div class="tblur"></div><span class="cat">Pets</span>
        <div class="ov"><div class="big"><span class="mtr">−50%</span> CPA</div><div class="sub">UGC-style ads · 12 variants</div><span class="go">View case →</span></div>
      </a>
    </div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="band testi" style="padding:clamp(54px,8vh,88px) 0">
  <div class="wrap center">
    <span class="label">What clients say</span>
    <h2 class="display" style="margin-top:14px;font-size:clamp(26px,3vw,40px);max-width:20ch;margin-left:auto;margin-right:auto">Teams that switched, <span class="serif-em">stayed</span>.</h2>
  </div>
  <div class="testiwrap" style="margin-top:40px">
    <div class="testitrack">
      <div class="tcard"><blockquote>The cost to value ratio is just beautiful. The quality of output and speed of delivery has completely transformed how we approach creative across all our clients.</blockquote><div class="who"><span class="av">AP</span><div><div class="nm">Aftab Pasha</div><div class="rl">Account Director, Solaire / Langoor</div></div></div></div>
      <div class="tcard"><blockquote>As someone managing e-commerce at scale, the turnaround time blew us away. We went from weeks to days — with better product accuracy than our in-house team could achieve.</blockquote><div class="who"><span class="av">NK</span><div><div class="nm">Nitin Kosari</div><div class="rl">AVP Ecommerce, LS Digital</div></div></div></div>
      <div class="tcard"><blockquote>Managing Epson's product catalog across channels was a nightmare. GaanaAI made every video look like it came from the same production house — pixel-perfect consistency.</blockquote><div class="who"><span class="av">BP</span><div><div class="nm">Bhavana Pujar</div><div class="rl">Account Director, Epson / Langoor</div></div></div></div>
      <div class="tcard"><blockquote>Our marketing team used to spend weeks coordinating creative. Now GaanaAI handles the entire pipeline — product shoots, social clips, marketplace videos — all in a day.</blockquote><div class="who"><span class="av">HJ</span><div><div class="nm">Himanshu Joshi</div><div class="rl">Head of Marketing, MokkaFarms</div></div></div></div>
      <div class="tcard"><blockquote>For a fast-growing company like ours, speed without sacrificing quality is everything. GaanaAI delivers production-ready videos our sales team can use immediately.</blockquote><div class="who"><span class="av">VM</span><div><div class="nm">Vishnu Modi</div><div class="rl">VP Marketing, i95Dev</div></div></div></div>
      <div class="tcard"><blockquote>We needed consistent product videos across 200+ SKUs for our furniture catalog. GaanaAI delivered every single one on-brand and marketplace-ready. Game changer.</blockquote><div class="who"><span class="av">PS</span><div><div class="nm">Prateek Sharma</div><div class="rl">Head of Marketing, Furnishka</div></div></div></div>
      <div class="tcard" aria-hidden="true"><blockquote>The cost to value ratio is just beautiful. The quality of output and speed of delivery has completely transformed how we approach creative across all our clients.</blockquote><div class="who"><span class="av">AP</span><div><div class="nm">Aftab Pasha</div><div class="rl">Account Director, Solaire / Langoor</div></div></div></div>
      <div class="tcard" aria-hidden="true"><blockquote>As someone managing e-commerce at scale, the turnaround time blew us away. We went from weeks to days — with better product accuracy than our in-house team could achieve.</blockquote><div class="who"><span class="av">NK</span><div><div class="nm">Nitin Kosari</div><div class="rl">AVP Ecommerce, LS Digital</div></div></div></div>
      <div class="tcard" aria-hidden="true"><blockquote>Managing Epson's product catalog across channels was a nightmare. GaanaAI made every video look like it came from the same production house — pixel-perfect consistency.</blockquote><div class="who"><span class="av">BP</span><div><div class="nm">Bhavana Pujar</div><div class="rl">Account Director, Epson / Langoor</div></div></div></div>
      <div class="tcard" aria-hidden="true"><blockquote>Our marketing team used to spend weeks coordinating creative. Now GaanaAI handles the entire pipeline — product shoots, social clips, marketplace videos — all in a day.</blockquote><div class="who"><span class="av">HJ</span><div><div class="nm">Himanshu Joshi</div><div class="rl">Head of Marketing, MokkaFarms</div></div></div></div>
      <div class="tcard" aria-hidden="true"><blockquote>For a fast-growing company like ours, speed without sacrificing quality is everything. GaanaAI delivers production-ready videos our sales team can use immediately.</blockquote><div class="who"><span class="av">VM</span><div><div class="nm">Vishnu Modi</div><div class="rl">VP Marketing, i95Dev</div></div></div></div>
      <div class="tcard" aria-hidden="true"><blockquote>We needed consistent product videos across 200+ SKUs for our furniture catalog. GaanaAI delivered every single one on-brand and marketplace-ready. Game changer.</blockquote><div class="who"><span class="av">PS</span><div><div class="nm">Prateek Sharma</div><div class="rl">Head of Marketing, Furnishka</div></div></div></div>
    </div>
  </div>
</section>

<!-- CLOSING CTA -->
<section class="band paper cta">
  <div class="wrap">
    <span class="label">No risk</span>
    <h2 class="display" style="margin-top:20px">Your first sample video is <span class="serif-em">on us</span>.</h2>
    <p class="lede" style="margin:0 auto">Send a product, skip the brief — our team handles it. See GaanaAI on your own creative before you commit.</p>
    <div class="actions">
      <a class="btn btn--accent" href="#"> Get your first video </a>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="wrap">
    <div class="fbrand" style="text-align:center">
      <div class="brand" style="justify-content:center"><img class="logo" src="/logo.svg" alt="GaanaAI"></div>
      <div class="sub" style="margin:14px auto 0;max-width:42ch">Made with love by the GaanaAI team. Creative that makes your products sell.</div>
    </div>
    <div class="fbot"><span>© 2026 GaanaAI. All rights reserved.</span><span>Privacy · Terms</span></div>
  </div>
</footer>`;

export default function Home() {
  useEffect(() => {
    
  // autoplay-in-view (mobile-safe): force muted+playsinline as properties, retry on load, touch fallback
  var vids=document.querySelectorAll('video');
  function kick(v){try{v.muted=true;v.defaultMuted=true;v.playsInline=true;var p=v.play();if(p&&p.catch)p.catch(function(){});}catch(e){}}
  vids.forEach(function(v){v.muted=true;v.defaultMuted=true;v.playsInline=true;v.setAttribute('muted','');v.setAttribute('playsinline','');v.addEventListener('loadeddata',function(){kick(v);});v.addEventListener('canplay',function(){kick(v);});});
  var vio=new IntersectionObserver(function(es){es.forEach(function(e){var v=e.target;if(e.isIntersecting){kick(v);}else{v.pause();}});},{threshold:.1});
  vids.forEach(function(v){vio.observe(v);});
  document.addEventListener('touchstart',function once(){vids.forEach(function(v){var r=v.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)kick(v);});},{passive:true,once:true});

  // scroll reveal — pop / slide elements in as they enter view
  var revSel='.tagline .t,.trusted,.band .label,.band h2.display,.band .lede,.feature .inner,.actions,.cols3>*,.better>*,.brandgrid>*,.tiles>*,.ba .media';
  // stagger children within each group
  ['.cols3','.better','.brandgrid','.tiles'].forEach(function(g){
    document.querySelectorAll(g).forEach(function(grp){
      Array.prototype.forEach.call(grp.children,function(c,i){c.style.transitionDelay=(i*0.09)+'s';});
    });
  });
  var rio=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){e.target.classList.add('in');rio.unobserve(e.target);}
  });},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  document.querySelectorAll(revSel).forEach(function(el){rio.observe(el);});

  // mobile hamburger drawer
  (function(){
    var h=document.getElementById('hamb'), m=document.getElementById('mobnav');
    if(!h||!m) return;
    var sc=document.createElement('div'); sc.className='navscrim'; document.body.appendChild(sc);
    function close(){h.classList.remove('open');m.classList.remove('open');sc.classList.remove('open');document.body.style.overflow='';}
    h.addEventListener('click',function(){
      var open=m.classList.toggle('open'); h.classList.toggle('open',open); sc.classList.toggle('open',open);
      document.body.style.overflow=open?'hidden':'';
    });
    sc.addEventListener('click',close);
    m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close);});
  })();

  // brand carousel arrows
  (function(){
    var car=document.getElementById('brandCarousel');
    if(!car) return;
    var prev=document.querySelector('.cbtn[data-dir="-1"]'), next=document.querySelector('.cbtn[data-dir="1"]'), nav=document.querySelector('.cnav');
    function step(){var c=car.querySelector('.bcard');return (c?c.offsetWidth:300)+22;}
    function upd(){
      if(nav) nav.style.display = 'flex';   // always show arrows
      if(prev) prev.disabled = car.scrollLeft<=4;
      if(next) next.disabled = car.scrollLeft+car.clientWidth>=car.scrollWidth-4;
    }
    document.querySelectorAll('.cbtn').forEach(function(b){
      b.addEventListener('click',function(){car.scrollBy({left:step()*parseInt(b.dataset.dir,10),behavior:'smooth'});});
    });
    car.addEventListener('scroll',upd,{passive:true});
    window.addEventListener('resize',upd);
    upd();
  })();

  }, []);
  return <div dangerouslySetInnerHTML={{ __html: HTML }} />;
}
