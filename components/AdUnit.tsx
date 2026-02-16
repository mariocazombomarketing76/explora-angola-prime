import React from 'react';

interface AdUnitProps {
    slot: string;
    format?: 'auto' | 'fluid' | 'rectangle';
    className?: string;
}

export const AdUnit: React.FC<AdUnitProps> = ({ slot, format = 'auto', className = '' }) => {
    // In a real environment, this would be a Google AdSense script
    // For dev/demo, we show a placeholder
    return (
        <div className={`w-full bg-zinc-100 border border-zinc-200 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-4 text-center my-8 ${className}`}>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Advertisement</span>
            <div className="w-full h-full min-h-[100px] bg-zinc-200/50 rounded-xl flex items-center justify-center">
                <p className="text-zinc-400 text-sm">Ad Space ({format})</p>
            </div>
        </div>
    );
};
