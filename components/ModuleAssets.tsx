
import React from 'react';
import type { ModuleAssets as ModuleAssetsType } from '../types';
import { VideoIcon, PodcastIcon, SlidesIcon, InfographicIcon } from './Icons';

interface AssetCardProps {
    icon: React.ReactNode;
    title: string;
    onClick?: () => void;
    href?: string;
}

const AssetCard: React.FC<AssetCardProps> = ({ icon, title, onClick, href }) => {
    const commonProps = {
        className: "bg-lumen-surface/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-lumen-primary/30 transition-all duration-300 aspect-square group",
    };

    const content = (
        <>
            <div className="text-lumen-secondary group-hover:text-lumen-highlight transition-colors duration-300">
                {icon}
            </div>
            <span className="mt-4 font-semibold text-text-primary uppercase tracking-wider">{title}</span>
        </>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" {...commonProps}>
                {content}
            </a>
        );
    }

    return (
        <button onClick={onClick} {...commonProps}>
            {content}
        </button>
    );
};


interface ModuleAssetsProps {
  assets: ModuleAssetsType;
  onPlayVideo: (url: string) => void;
}

export const ModuleAssets: React.FC<ModuleAssetsProps> = ({ assets, onPlayVideo }) => {
  return (
    <div className="my-12">
      <h3 className="text-2xl font-bold mb-4 text-lumen-secondary">Module Resources</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {assets.videoUrl && (
            <AssetCard 
                icon={<VideoIcon />}
                title="Watch Video"
                onClick={() => onPlayVideo(assets.videoUrl!)}
            />
        )}
        {assets.podcastUrl && (
            <AssetCard 
                icon={<PodcastIcon />}
                title="Listen Podcast"
                href={assets.podcastUrl}
            />
        )}
        {assets.slidesUrl && (
            <AssetCard 
                icon={<SlidesIcon />}
                title="View Slides"
                href={assets.slidesUrl}
            />
        )}
        {assets.infographicUrl && (
            <AssetCard 
                icon={<InfographicIcon />}
                title="See Infographic"
                href={assets.infographicUrl}
            />
        )}
      </div>
    </div>
  );
};
