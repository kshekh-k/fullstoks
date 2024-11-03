"use client";
import { Angledownicon, Anglerighticon } from '@/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
 
interface ListItemProps {
    label?: string;
    url?: string;
    icon?: string;
    subCat?: ListItemProps[];
}
interface NestedListItem {
    label?: string;
    url?: string;
    icon?: string;
    subCat?: NestedListItem[];
}

const categoriesList: NestedListItem[] = [
    {
        label: 'Electronic Devices',
        url: '#',
        // icon: '/images/cate-1.webp',
        subCat: [
            {
                label: 'Smartphones',
                url: '#',
                subCat: [
                    {
                        label: 'Realme Phones',
                        url: '#',
                    },
                    {
                        label: 'Samsung Phones',
                        url: '#',
                    },
                    {
                        label: 'Xiaomi Phones',
                        url: '#',
                    },
                    {
                        label: 'OPPO Phones',
                        url: '#',
                    },
                    {
                        label: 'Vivo Phones',
                        url: '#',
                    },
                    {
                        label: 'Infinix Phones',
                        url: '#',
                    },
                    {
                        label: 'Motorola Phones',
                        url: '#',
                    },
                    {
                        label: 'Tecno Phones',
                        url: '#',
                    },
                    {
                        label: 'iphone',
                        url: '#',
                    },
                ]
            },
            {
                label: 'Feature Phone',
                url: '#',
                subCat: [
                    {
                        label: 'Nokia Feature Phones',
                        url: '#',
                    },
                    {
                        label: 'Samsung Feature Phones',
                        url: '#',
                    },
                ]
            },
            {
                label: 'Laptops',
                url: '#',
                subCat: [
                    {
                        label: 'HP Laptops',
                        url: '#',
                    },
                    {
                        label: 'Asus Laptops',
                        url: '#',
                    },
                    {
                        label: 'Dell Laptops',
                        url: '#',
                    },
                    {
                        label: 'Lenovo Laptops',
                        url: '#',
                    },
                    {
                        label: 'Acer Laptops',
                        url: '#',
                    },
                ]
            },
            {
                label: 'Cameras',
                url: '#',
                subCat: [
                    {
                        label: 'DSLR',
                        url: '#',
                    },
                    {
                        label: 'Mirrorless',
                        url: '#',
                    },
                    {
                        label: 'Point & Shoot',
                        url: '#',
                    },
                    {
                        label: 'Car Cameras',
                        url: '#',
                    },
                    {
                        label: 'Action/Video Cameras',
                        url: '#',
                    },
                ]
            },
            {
                label: 'Security Cameras',
                url: '#',
                subCat: [
                    {
                        label: 'IP Security Cameras',
                        url: '#',
                    },
                    {
                        label: 'CCTV Security Cameras',
                        url: '#',
                    },

                ]
            },
        ]
    },
    {
        label: 'Electronic Accessories',
        url: '#',
        // icon: '/images/cate-2.webp',
        subCat: [
            {
                label: 'Mobile Accessories',
                url: '#',
                subCat: [
                    {
                        label: 'Phone Cases',
                        url: '#',
                    },
                    {
                        label: 'Power Banks',
                        url: '#',
                    },
                    {
                        label: 'Cables & Converters',
                        url: '#',
                    },
                    {
                        label: 'Wall Chargers',
                        url: '#',
                    },
                    {
                        label: 'Wireless Chargers',
                        url: '#',
                    },
                ]
            },
            {
                label: 'Audio',
                url: '#',
                subCat: [
                    {
                        label: 'Headphones & Headset',
                        url: '#',
                    },
                    {
                        label: 'Home Entertainment',
                        url: '#',
                    },
                    {
                        label: 'Bluetooth Speakers',
                        url: '#',
                    },
                    {
                        label: 'Live sound & Stage Equipment',
                        url: '#',
                    },
                ]
            },
            {
                label: 'Wearable',
                url: '#',
                subCat: [
                    {
                        label: 'Smartwatches',
                        url: '#',
                    },
                    {
                        label: 'Virtual Reality',
                        url: '#',
                    },
                ]
            },
            {
                label: 'Console Accessories',
                url: '#',
                subCat: [
                    {
                        label: 'Playstation Controllers',
                        url: '#',
                    },
                    {
                        label: 'Other Gaming Accessories',
                        url: '#',
                    },
                ]
            },
            {
                label: 'Camera Accessories',
                url: '#',
                subCat: [
                    {
                        label: 'Memory Cards',
                        url: '#',
                    },
                    {
                        label: 'DSLR Lens',
                        url: '#',
                    },
                    {
                        label: 'Mirrorless Lens',
                        url: '#',
                    },
                    {
                        label: 'Special Camera Lens',
                        url: '#',
                    },
                    {
                        label: 'Tripods & Monopods',
                        url: '#',
                    },
                    {
                        label: 'Camera Cases, Covers and Bags',
                        url: '#',
                    },
                    {
                        label: 'Lighting & Studio Equipment',
                        url: '#',
                    },
                    {
                        label: 'Dry Box',
                        url: '#',
                    },
                    {
                        label: 'Batteries',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Computer Accessories',
                url: '#',
                subCat: [
                    {
                        label: 'Monitors',
                        url: '#',
                    },
                    {
                        label: 'Mice',
                        url: '#',
                    },
                    {
                        label: 'PC Audio',
                        url: '#',
                    },
                    {
                        label: 'Keyboards',
                        url: '#',
                    },
                    {
                        label: 'Mice & Keyboard Combos',
                        url: '#',
                    },
                    {
                        label: 'Power Cord & Adaptors',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Storage',
                url: '#',
                subCat: [
                    {
                        label: 'Storage',
                        url: '#',
                    },
                    {
                        label: 'Internal Hard Drives',
                        url: '#',
                    },
                    {
                        label: 'Flash Drives',
                        url: '#',
                    },
                    {
                        label: 'OTG Drives',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Printer',
                url: '#',
                subCat: [
                    {
                        label: 'Printers',
                        url: '#',
                    },
                    {
                        label: 'Ink & Toners',
                        url: '#',
                    },
                    {
                        label: 'Printer Stands',
                        url: '#',
                    },
                    {
                        label: 'Fax Machines',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Computer Components',
                url: '#',
                subCat: [
                    {
                        label: 'Graphic Cards',
                        url: '#',
                    },
                    {
                        label: 'Desktop Casings',
                        url: '#',
                    },
                    {
                        label: 'Motherboards',
                        url: '#',
                    },
                    {
                        label: 'Fans & Heatsinks',
                        url: '#',
                    },
                    {
                        label: 'RAM',
                        url: '#',
                    },
                    {
                        label: 'Processors',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Network Components',
                url: '#',
                subCat: [
                    {
                        label: 'Access Points',
                        url: '#',
                    },
                    {
                        label: 'Modems',
                        url: '#',
                    },
                    {
                        label: 'Network Interface Cards',
                        url: '#',
                    },
                    {
                        label: 'Network Switches',
                        url: '#',
                    },
                    {
                        label: 'Routers',
                        url: '#',
                    },
                    {
                        label: 'Wireless USB Adapters',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Software',
                url: '#',
                subCat: [
                    {
                        label: 'Educational Media',
                        url: '#',
                    },
                    {
                        label: 'Operating System',
                        url: '#',
                    },
                    {
                        label: 'PC Games',
                        url: '#',
                    },
                    {
                        label: 'Security Software',
                        url: '#',
                    },

                ]
            },
        ]
    },
    {
        label: 'Health & Beauty',
        url: '#',
        // icon: '/images/cate-3.webp',
        subCat: [
            {
                label: 'Bath & Body',
                url: '#',
                subCat: [
                    {
                        label: 'Body & Massage Oils',
                        url: '#',
                    },
                    {
                        label: 'Body Moisturizers',
                        url: '#',
                    },
                    {
                        label: 'Body Scrubs',
                        url: '#',
                    },
                    {
                        label: 'Body Soaps & Shower Gels',
                        url: '#',
                    },
                    {
                        label: 'Foot Care',
                        url: '#',
                    },
                    {
                        label: 'Hair Removal',
                        url: '#',
                    },
                    {
                        label: 'Hand Care',
                        url: '#',
                    },
                    {
                        label: 'Sun Care for Body',
                        url: '#',
                    },
                    {
                        label: 'Bath & Body Accessories',
                        url: '#',
                    },
                ]
            },
            {
                label: 'Beauty Tools',
                url: '#',
                subCat: [
                    {
                        label: 'Curling Irons & Wands',
                        url: '#',
                    },
                    {
                        label: 'Flat Irons',
                        url: '#',
                    },
                    {
                        label: 'Multi-stylers',
                        url: '#',
                    },
                    {
                        label: 'Hair Dryers',
                        url: '#',
                    },
                    {
                        label: 'Face Skin Care Tools',
                        url: '#',
                    },
                    {
                        label: 'Foot Relief Tools',
                        url: '#',
                    },
                    {
                        label: 'Hair Removal Accessories',
                        url: '#',
                    },
                    {
                        label: 'Slimming & Electric Massagers',
                        url: '#',
                    },
                ]
            },
            {
                label: 'Fragrances',
                url: '#',
                subCat: [
                    {
                        label: 'Women Fragrances',
                        url: '#',
                    },

                    {
                        label: 'Men Fragrances',
                        url: '#',
                    },
                    {
                        label: 'Unisex Fragrances',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Hair Care',
                url: '#',
                subCat: [
                    {
                        label: 'Shampoo',
                        url: '#',
                    },
                    {
                        label: 'Hair Treatments',
                        url: '#',
                    },
                    {
                        label: 'Hair Care Accessories',
                        url: '#',
                    },
                    {
                        label: 'Hair Brushes & Combs',
                        url: '#',
                    },
                    {
                        label: 'Hair Coloring',
                        url: '#',
                    },
                    {
                        label: 'Hair Conditioner',
                        url: '#',
                    },
                    {
                        label: 'Wig & Hair Extensions & Pads',
                        url: '#',
                    },
                ]
            },
            {
                label: "Men's Care",
                url: '#',
                subCat: [
                    {
                        label: 'Deodorants',
                        url: '#',
                    },
                    {
                        label: 'Hair Care',
                        url: '#',
                    },
                    {
                        label: 'Shaving & Grooming',
                        url: '#',
                    },
                    {
                        label: 'Skin Care',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Personal Care',
                url: '#',
                subCat: [
                    {
                        label: 'Oral Care',
                        url: '#',
                    },
                    {
                        label: 'Personal Safety & Security',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Skin Care',
                url: '#',
                subCat: [
                    {
                        label: 'Moisturizers & Creams',
                        url: '#',
                    },
                    {
                        label: 'Serum & Essence',
                        url: '#',
                    },
                    {
                        label: 'Face Mask & Packs',
                        url: '#',
                    },
                    {
                        label: 'Face Scrubs & Exfoliators',
                        url: '#',
                    },
                    {
                        label: 'Facial Cleansers',
                        url: '#',
                    },
                    {
                        label: 'Lip Balm & Treatments',
                        url: '#',
                    },
                    {
                        label: 'Toner & Mists',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Food Supplements',
                url: '#',
                subCat: [
                    {
                        label: 'Beauty Supplements',
                        url: '#',
                    },
                    {
                        label: 'Multivitamins',
                        url: '#',
                    },
                    {
                        label: 'Sports Nutrition',
                        url: '#',
                    },
                    {
                        label: 'Well Being',
                        url: '#',
                    },
                    {
                        label: 'Sexual Health Vitamins',
                        url: '#',
                    },

                ]
            },
            {
                label: 'Medical Supplies',
                url: '#',
                subCat: [
                    {
                        label: 'First Aid Supplies',
                        url: '#',
                    },
                    {
                        label: 'Health Accessories',
                        url: '#',
                    },
                    {
                        label: '>Health Monitors & Tests',
                        url: '#',
                    },
                    {
                        label: 'Injury Support & Braces',
                        url: '#',
                    },
                    {
                        label: 'Medical Tests',
                        url: '#',
                    },
                    {
                        label: 'Nebulizers & Aspirators',
                        url: '#',
                    },
                    {
                        label: 'Ointments & Creams',
                        url: '#',
                    },
                    {
                        label: 'Scales & Body Fat Analyzers',
                        url: '#',
                    },
                    {
                        label: 'Wheelchairs',
                        url: '#',
                    },

                ]
            },

        ]
    },
    {
        label: 'Babies & Toys',
        url: '#',
        // icon: '/images/cate-4.webp',
        subCat: [
            {
                label: 'Feeding',
                url: '#',
                subCat: [
                    {
                        label: 'Baby & Toddler Foods',
                        url: '#',
                    },
                ]
            },

        ]
    },
    {
        label: 'Fashion',
        url: '#',
        // icon: '/images/cate-5.webp',
        subCat: [
            {
                label: 'Men Fashion',
                url: '#',
                subCat: [
                    {
                        label: 'Jackets & Coats',
                        url: '#',
                    },
                ]
            },

        ]
    },
    {
        label: 'Watches & Accessories',
        url: '#',
        // icon: '/images/cate-6.webp',
        subCat: [
            {
                label: "Men's Watch",
                url: '#',
                subCat: [
                    {
                        label: 'Casual',
                        url: '#',
                    },
                ]
            },

        ]
    },
    {
        label: 'Sports & Outdoor',
        url: '#',
        // icon: '/images/cate-7.webp',
        subCat: [
            {
                label: "Cycling",
                url: '#',
                subCat: [
                    {
                        label: 'Bicycle',
                        url: '#',
                    },
                ]
            },

        ]
    },
    {
        label: 'Automotive & Motorbike',
        url: '#',
        // icon: '/images/cate-8.webp',
        subCat: [
            {
                label: "Automobile",
                url: '#',
                subCat: [
                    {
                        label: 'Imported Cars',
                        url: '#',
                    },
                ]
            },

        ]
    },
    {
        label: 'Home Appliances',
        url: '#',
        // icon: '/images/default-image.png',
        subCat: [
            {
                label: "Small Kitchen Appliances",
                url: '#',
                subCat: [
                    {
                        label: 'Food Preparation',
                        url: '#',
                    },
                ]
            },

        ]
    },
    {
        label: 'Digital Product',
        url: '#',
        // icon: '/images/cate-10.webp',
        subCat: [
            {
                label: "HTML",
                url: '#',
                subCat: []
            },
            {
                label: "WordPress",
                url: '#',
                subCat: []
            },

        ]
    },
    {
        label: 'Cameroon',
        url: '#',
        // icon: '/images/default-image.png',
        subCat: [
            {
                label: "Envato",
                url: '#',
                subCat: []
            },

        ]
    },


]




// function List  ({label, url, subItems=[], subItems2=[]}:any)  {
const List: React.FC<ListItemProps> = ({ label, url, icon, subCat = [] }: any) => {
    const [isLevel, setIslevel] = React.useState(false);
    const toggleIsLevel = () => {
        setIslevel((prev) => !prev);
    };
 

    return (
    <>
        <li className='relative w-full'>
            <div className='flex gap-1'>
                <Link href={url} className='flex flex-1 items-center justify-start w-full leading-tight text-primary-600 hover:text-primary-900 uppercase ease-in-out duration-200 font-medium py-3 gap-3 '>
                  {icon && <Image src={icon} alt='' className='size-5' width={32} height={32} />}  <span className='text-sm'>{label}</span>
                </Link>
                {subCat && subCat.length > 0 && <button onClick={toggleIsLevel} className='py-2 px-3 text-primary-600 hover:bg-primary-900/5 uppercase ease-in-out duration-200'><Anglerighticon className={`size-3 ${isLevel ? 'rotate-90' : ''}`} /></button>}
            </div>
            {isLevel && subCat &&
                <ul className='divide-y divide-primary-900/5 pl-2'>
                    {subCat?.map((subCitem: any, si: any) =>
                        <List key={si} label={subCitem.label} url={subCitem.url} subCat={subCitem.subCat} />
                    )}
                </ul>
            }
        </li>
    </>
    )
}


interface responsivecategories{
    className?:string,
    ref?: React.RefObject<HTMLDivElement>;
}
 
const Responsivecategories: React.FC<responsivecategories>=({ className, ref }) => {  
    
    return (
        <div id="categoryList" ref={ref} className={`flex flex-col gap-4 ${className}`}>
            <ul className="divide-y divide-primary-900/5 w-full">
                {categoriesList.map((item, index) => (
                    <List key={index} label={item.label} url={item.url} icon={item.icon} subCat={item.subCat} />
                ))}                 
            </ul>
        </div>
    )
}
export default Responsivecategories


