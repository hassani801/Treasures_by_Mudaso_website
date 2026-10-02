import { Instagram, ArrowUpRight, Heart } from 'lucide-react';
import { BRAND_DATA, INSTAGRAM_POSTS } from '../data/content';

export default function InstagramStrip() {
  return (
    <section className="py-20 lg:py-24 bg-[#FDF8F4] overflow-hidden border-b border-[#F4D9CF]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-serif uppercase tracking-[0.25em] text-xs text-[#C98270] font-semibold flex items-center gap-2">
            <Instagram className="w-3.5 h-3.5" />
            <span>Community & UK Sourcing Hauls</span>
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#3E2C27] mt-2">
            Follow <span className="font-serif italic font-normal text-[#C98270]">{BRAND_DATA.instagramHandle}</span>
          </h2>
        </div>

        <a
          href={BRAND_DATA.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border border-[#E3A58F] text-xs font-semibold uppercase tracking-wider text-[#3E2C27] hover:bg-[#F4D9CF]/30 transition-all self-start md:self-auto shadow-sm"
        >
          <Instagram className="w-4 h-4 text-[#C98270]" />
          <span>Join {BRAND_DATA.followersCount} Followers</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#C98270]" />
        </a>
      </div>

      {/* 6 Tilted Square Tiles Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {INSTAGRAM_POSTS.map((post, idx) => {
            // Slight alternating tilt angles for playful boutique editorial look
            const tiltClass =
              idx % 3 === 0
                ? 'hover:rotate-0 rotate-1'
                : idx % 3 === 1
                ? 'hover:rotate-0 -rotate-1'
                : 'hover:rotate-0 rotate-2';

            return (
              <a
                key={post.id}
                href={BRAND_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative aspect-square rounded-2xl overflow-hidden bg-white border-2 border-white shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${tiltClass}`}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Instagram Icon & Likes Overlay */}
                <div className="absolute inset-0 bg-[#3E2C27]/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center text-white">
                  <Instagram className="w-6 h-6 text-[#E3A58F] mb-1.5 transform group-hover:scale-110 transition-transform" />
                  <p className="font-serif text-xs font-semibold leading-tight line-clamp-2">
                    {post.title}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-[#E3A58F] mt-2">
                    <Heart className="w-3 h-3 fill-current" />
                    <span>{post.likes}</span>
                  </div>
                </div>

                {/* Subtle Department Tag */}
                <div className="absolute bottom-2 left-2 z-10 text-[9px] font-mono text-white/90 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full group-hover:opacity-0 transition-opacity">
                  {post.category}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
