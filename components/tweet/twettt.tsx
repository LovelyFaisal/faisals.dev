import { EnrichedTweet, type enrichTweet } from "react-tweet";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
type Props = {
  tweet: EnrichedTweet;
};
export default function EmbeddedTweet({ tweet }: Props) {
  return (
    <div
      className="bg-[#131316] border border-white/5 p-5 mb-4 break-inside-avoid rounded-xl"
      style={{ breakInside: "avoid" }}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <Image
            src={tweet.user.profile_image_url_https}
            alt={tweet.user.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="font-bold text-white">{tweet.user.name}</h3>
            <p className="text-xs text-slate-500 font-mono">
              @{tweet.user.screen_name}
            </p>
          </div>
        </div>
        <FaXTwitter className="" />
      </div>
      <p className="text-slate-200 text-lg leading-relaxed mb-4">
        {tweet.entities[0].text}
      </p>
      {tweet.mediaDetails?.length ? (
        <div className="mb-4">
          {tweet.mediaDetails.map((media) => (
            <Image
              key={media.media_url_https}
              src={media.media_url_https}
              alt="Tweet media"
              width={500}
              height={300}
              className="rounded-lg mb-4 object-cover"
            />
          ))}
        </div>
      ) : null}
      <div className="flex items-center justify-between pt-3 border-t border-white/5">
        <div className="flex gap-3">
          <FaRegHeart className="text-slate-500" size={18} />
          <FaRegComment className="text-slate-500" size={18} />
        </div>
      </div>
    </div>
  );
}
