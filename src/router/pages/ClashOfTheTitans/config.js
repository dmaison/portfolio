import AxlePress1 from './media/axle-press-still.jpg';
import AxlePress2 from './media/axle-press-still-2.jpg';
import SledDrag1 from './media/sled-drag-still.jpg';
import Husafell1 from './media/husafell-still.jpg';
import Atlas1 from './media/atlas-stone-still.jpg';
import Squat1 from './media/squat-still.jpg';
import Win from './media/win.jpg';

/**
 * Used to easily iterate through images/videos of the show
 * @type {array}
 */
export const MEDIA = [
    {
        title: 'Axle Press',
        subtitle: 'for reps',
        url: AxlePress1,
        weight: 215
    },
    {
        title: 'First Place Baby!',
        url: Win
    },
    {
        title: 'Sled Drag',
        subtitle: 'for time',
        weight: 460,
        url: SledDrag1,
        video: true
    },
    {
        title: 'Husafell Carry',
        subtitle: 'for distance & time',
        weight: 250,
        url: Husafell1,
        video: true
    },
    {
        title: 'Atlas Stones',
        subtitle: 'for max weight',
        weight: 325,
        url: Atlas1,
        video: true
    },
    {
        title: 'Axle Press',
        subtitle: 'for reps',
        url: AxlePress2,
        weight: 215,
        video: true
    },
    {
        title: 'Squat',
        subtitle: 'for reps',
        url: Squat1,
        weight: 375,
        video: true
    },
]