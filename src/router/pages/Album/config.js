import AxlePress1 from './media/cot/axle-press-still.jpg';
import AxlePress2 from './media/cot/axle-press-still-2.jpg';
import AxlePressVid from './media/cot/axle-press.mp4';
import SledDrag1 from './media/cot/sled-drag-still.jpg';
import SledDragVid from './media/cot/sled-drag.mp4';
import Husafell1 from './media/cot/husafell-still.jpg';
import HusafellVid from './media/cot/husafell.mp4';
import Atlas1 from './media/cot/atlas-stone-still.jpg';
import AtlasVid from './media/cot/atlas-stone.mp4';
import Squat1 from './media/cot/squat-still.jpg';
import SquatVid from './media/cot/squat.mp4';
import Win from './media/cot/win.jpg';

/**
 * Used to filter the media on the page
 * @type {array}
 */
export const GROUPS = [
    {
        id: 1,
        title: "Clash of the Titans"
    },
    {
        id: 2,
        title: "Garden"
    },
    {
        id: 3,
        title: "Wedding"
    }
]

/**
 * Used to easily iterate through images/videos of the show
 * @type {array}
 */
export const MEDIA = [
    {
        groupId: GROUPS[ 0 ].id,
        title: 'Axle Press',
        subtitle: 'for reps',
        url: AxlePress1,
        weight: 215
    },
    {
        groupId: GROUPS[ 0 ].id,
        title: 'First Place Baby!',
        url: Win
    },
    {
        groupId: GROUPS[ 0 ].id,
        title: 'Sled Drag',
        subtitle: 'for time',
        weight: 460,
        url: SledDrag1,
        video: SledDragVid
    },
    {
        groupId: GROUPS[ 0 ].id,
        title: 'Húsafell Carry',
        subtitle: 'for distance & time',
        weight: 250,
        url: Husafell1,
        video: HusafellVid
    },
    {
        groupId: GROUPS[ 0 ].id,
        title: 'Atlas Stones',
        subtitle: 'for max weight',
        weight: 325,
        url: Atlas1,
        video: AtlasVid
    },
    {
        groupId: GROUPS[ 0 ].id,
        title: 'Axle Press',
        subtitle: 'for reps',
        url: AxlePress2,
        weight: 215,
        video: AxlePressVid
    },
    {
        groupId: GROUPS[ 0 ].id,
        title: 'Squat',
        subtitle: 'for reps',
        url: Squat1,
        weight: 375,
        video: SquatVid
    },
]