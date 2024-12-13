import React from 'react';
import Image from 'next/image';

const DeliveaLogo = () => {
    return (
        <div className="shrink-0">
            <a href="#" title="" className="">
                <Image
                    className="block w-auto h-8 dark:hidden rounded"
                    src="/logo/delivea-logo3.png"
                    alt="Delivea Logo"
                    width={32}
                    height={32}
                />
                <Image
                    className="hidden w-auto h-8 dark:block rounded"
                    src="/logo/delivea-logo3.png"
                    alt="Delivea Logo"
                    width={32}
                    height={32}
                />
            </a>
        </div>
    );
};

export default DeliveaLogo;