'use client';

import { useState } from 'react';
import LucideIcon from './LucideIcon';
import { Tooltip } from './Tooltip';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav id="navbar" className="fixed bottom-0 z-50 flex items-center justify-center w-screen h-16 gap-6 border-t border-cborder bg-cbg lg:top-0 lg:border-r lg:border-t-0 lg:w-16 lg:h-full lg:flex-col">
            <Button href="/" icon="Home"></ Button>
            <Button href="/hkunotes" icon="PenLine"></ Button>
            <Button href="/stack" icon="Layers"></ Button>
            <Button href="/work" icon="Command"></ Button>
            <Button href="/about" icon="UserRound"></ Button>
        </nav>
    );
}

const Button = ({ href, icon }) => {
    const activeColor = '#EDEDED'
    const inactiveColor = '#707070'
    const location = usePathname();
    const isActive = location === href;
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Tooltip content="Hola!">
            <Link href={href} className="relative p-3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <LucideIcon name={icon} size="1.5rem" color={isActive ? activeColor : inactiveColor} />
                {isHovered && (
                    <div className='absolute hidden p-1 text-xs text-white transform -translate-y-1/2 border rounded-lg text-light border-cborder bg-cfg left-16 top-1/2 lg:block'>
                        <span>{href}</span>
                    </div>
                )}
            </Link>
        </Tooltip>
    );
}

export default NavBar;