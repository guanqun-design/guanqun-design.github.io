/**
 * MIT License
 *
 * Copyright (c) 2025-2026 guanqun-design
 * https://guanqun-design.github.io
 * https://zhangguanqun.cn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {ui} from '../utils/mini-ui.js'

const [title, subtitle,images, paragraph] = [ui.title, ui.subtitle,ui.images, ui.paragraph];

let exhibitionPages = {

    gePage : [
        [title], "Nam Facibu EsGE 通用电气医疗展",
        [images, [4]],
        {url: "image/ge/ge1.jpg", width: 2049, height: 1288},
        {url: "image/ge/ge2.jpg", width: 2049, height: 1288},
        {url: "image/ge/ge3.jpg", width: 2049, height: 1288},
        {url: "image/ge/ge4.jpg", width: 2049, height: 1288},
        [images, [1, 1]],
        {url: "image/ge/ge5.jpg", width: 1500, height: 1188},
        {url: "image/ge/ge6.jpg", width: 1286, height: 732},
        [images, [1, 1]],
        {url: "image/ge/ge7.jpg", width: 1500, height: 810},
        {url: "image/ge/ge8.jpg", width: 1500, height: 818},
        [images, [1, 1, 1]],
        {url: "image/ge/ge9.jpg", width: 800, height: 451},
        {url: "image/ge/ge10.jpg", width: 1000, height: 456},
        {url: "image/ge/ge11.jpg", width: 800, height: 450},
        [images, [1]],
        {url: "image/ge/ge12.jpg", width: 1189, height: 1288}
    ],

    vehicleExhibitionPage : [
        [title], "Vehicle Exhibition 车展",
        [subtitle], "Mercedes-Benz",
        [images, [3]],
        {url: "image/vehicle-exhibition/ve1.jpg", width: 1500, height: 844},
        {url: "image/vehicle-exhibition/ve2.jpg", width: 1500, height: 844},
        {url: "image/vehicle-exhibition/ve3.jpg", width: 1500, height: 715},
        [images, [1, 1]],
        {url: "image/vehicle-exhibition/ve4.jpg", width: 1500, height: 843},
        {url: "image/vehicle-exhibition/ve5.jpg", width: 1280, height: 720},
        [subtitle], "PHAETON",
        [images, [5]],
        {url: "image/vehicle-exhibition/ve6.jpg", width: 960, height: 720},
        {url: "image/vehicle-exhibition/ve7.jpg", width: 960, height: 720},
        {url: "image/vehicle-exhibition/ve8.jpg", width: 960, height: 720},
        {url: "image/vehicle-exhibition/ve9.jpg", width: 960, height: 720},
        {url: "image/vehicle-exhibition/ve10.jpg", width: 1500, height: 1061},
        [subtitle], "CHANG AN",
        [images, [1]],
        {url: "image/vehicle-exhibition/ve11.jpg", width: 1500, height: 1061},
        [images, [1, 1]],
        {url: "image/vehicle-exhibition/ve12.jpg", width: 1268, height: 849},
        {url: "image/vehicle-exhibition/ve13.jpg", width: 1268, height: 846},
        [images, [1, 1]],
        {url: "image/vehicle-exhibition/ve14.jpg", width: 1268, height: 846},
        {url: "image/vehicle-exhibition/ve15.jpg", width: 1268, height: 846},
        [subtitle], "SMART",
        [images, [1]],
        {url: "image/vehicle-exhibition/ve16.jpg", width: 1500, height: 1061}
    ],

    hoverCameraExhibitionPage : [
        [title], "HOVERCAMERA 展厅规划",
        [images, [1, 1]],
        {url: "image/hover-camera-exhibition/ho1.jpg", width: 842, height: 595},
        {url: "image/hover-camera-exhibition/ho2.jpg", width: 842, height: 595},
        [images, [1, 1]],
        {url: "image/hover-camera-exhibition/ho3.jpg", width: 842, height: 595},
        {url: "image/hover-camera-exhibition/ho4.jpg", width: 842, height: 595},
        [images, [1, 1]],
        {url: "image/hover-camera-exhibition/ho5.jpg", width: 842, height: 595},
        {url: "image/hover-camera-exhibition/ho6.jpg", width: 842, height: 595}
    ],

    dragonToothPage : [
        [title], "DRAGON TOOTH 龙牙店面展示设计",
        [paragraph],
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in tortor risus. Praesent rhoncus neque a nulla " +
        "volutpat, sit amet molestie nisi luctus. Vivamus sit amet pellentesque tortor. Maecenas quis egestas urna. Morbi " +
        "volutpat risus in lacinia volutpat. Nulla placerat faucibus erat ac tempor. Praesent et urna at arcu viverra " +
        "vulputate eget hendrerit odio.",
        [images, [1, 1]],
        {url: "image/dragon-tooth/dt1.jpg", width: 1500, height: 844},
        {url: "image/dragon-tooth/dt2.jpg", width: 1500, height: 844},
        [images, [8]],
        {url: "image/dragon-tooth/dt3.jpg", width: 2000, height: 1125},
        {url: "image/dragon-tooth/dt4.jpg", width: 2000, height: 1125},
        {url: "image/dragon-tooth/dt5.jpg", width: 2000, height: 1125},
        {url: "image/dragon-tooth/dt6.jpg", width: 2000, height: 1125},
        {url: "image/dragon-tooth/dt7.jpg", width: 2000, height: 1125},
        {url: "image/dragon-tooth/dt8.jpg", width: 2000, height: 1125},
        {url: "image/dragon-tooth/dt9.jpg", width: 2000, height: 1125},
        {url: "image/dragon-tooth/dt10.jpg", width: 2000, height: 1125},
        [images, [1, 1]],
        {url: "image/dragon-tooth/dt11.jpg", width: 1500, height: 844},
        {url: "image/dragon-tooth/dt12.jpg", width: 1500, height: 844},
        [images, [2]],
        {url: "image/dragon-tooth/dt13.jpg", width: 2000, height: 1125},
        {url: "image/dragon-tooth/dt14.jpg", width: 2000, height: 1125},
    ],

    convivialitePage : [
        [title], "Convivialite  比利时薯条活动",
        [images, [1, 1, 1]],
        {url: "image/convivialite/co1.jpg", width: 1500, height: 999},
        {url: "image/convivialite/co2.jpg", width: 1000, height: 745},
        {url: "image/convivialite/co3.jpg", width: 600, height: 800},
        [images, [1, 1, 1]],
        {url: "image/convivialite/co4.jpg", width: 900, height: 675},
        {url: "image/convivialite/co5.jpg", width: 700, height: 621},
        {url: "image/convivialite/co6.jpg", width: 1000, height: 666},
        [images, [1, 1]],
        {url: "image/convivialite/co7.jpg", width: 1500, height: 999},
        {url: "image/convivialite/co8.jpg", width: 1500, height: 999},
        [images, [1, 1]],
        {url: "image/convivialite/co9.jpg", width: 1500, height: 999},
        {url: "image/convivialite/co10.jpg", width: 1500, height: 999},
        [images, [1, 1]],
        {url: "image/convivialite/co11.jpg", width: 1500, height: 1125},
        {url: "image/convivialite/co12.jpg", width: 1500, height: 1125},
        [images, [1, 1, 1]],
        {url: "image/convivialite/co13.jpg", width: 800, height: 600},
        {url: "image/convivialite/co14.jpg", width: 800, height: 600},
        {url: "image/convivialite/co15.jpg", width: 900, height: 599},
    ],

    lumierePage : [
        [title], "Lumiere  学校公共灯光设计",
        [images, [1, 1]],
        {url: "image/lumiere/l1.jpg", width: 842, height: 595},
        {url: "image/lumiere/l2.jpg", width: 842, height: 595},
        [images, [1, 1]],
        {url: "image/lumiere/l3.jpg", width: 842, height: 595},
        {url: "image/lumiere/l4.jpg", width: 842, height: 595},
        [images, [1, 1]],
        {url: "image/lumiere/l5.jpg", width: 842, height: 595},
        {url: "image/lumiere/l6.jpg", width: 842, height: 595},
        [images, [1, 1]],
        {url: "image/lumiere/l7.jpg", width: 842, height: 595},
        {url: "image/lumiere/l8.jpg", width: 842, height: 595},
        [images, [1, 1]],
        {url: "image/lumiere/l9.jpg", width: 842, height: 595},
        {url: "image/lumiere/l10.jpg", width: 842, height: 595},
        [images, [1, 1]],
        {url: "image/lumiere/l11.jpg", width: 842, height: 595},
        {url: "image/lumiere/l12.jpg", width: 842, height: 595},
    ],

    fivesCailBabcockPage : [
        [title], "Five Cail Babcock 里尔旧工厂改造",
        [images, [1, 1]],
        {url: "image/fives-cail-babcock/f1.jpg", width: 1191, height: 842},
        {url: "image/fives-cail-babcock/f2.jpg", width: 1191, height: 842},
        [images, [1, 1]],
        {url: "image/fives-cail-babcock/f3.jpg", width: 1191, height: 842},
        {url: "image/fives-cail-babcock/f4.jpg", width: 1191, height: 842},
        [images, [1, 1]],
        {url: "image/fives-cail-babcock/f5.jpg", width: 1191, height: 842},
        {url: "image/fives-cail-babcock/f6.jpg", width: 1191, height: 842},
        [images, [1, 1]],
        {url: "image/fives-cail-babcock/f7.jpg", width: 1191, height: 842},
        {url: "image/fives-cail-babcock/f8.jpg", width: 1191, height: 842},
        [images, [1, 1]],
        {url: "image/fives-cail-babcock/f9.jpg", width: 1191, height: 842},
        {url: "image/fives-cail-babcock/f10.jpg", width: 1191, height: 842},
        [images, [1, 1]],
        {url: "image/fives-cail-babcock/f11.jpg", width: 1191, height: 842},
        {url: "image/fives-cail-babcock/f12.jpg", width: 1191, height: 842},
        [images, [1, 1]],
        {url: "image/fives-cail-babcock/f13.jpg", width: 1191, height: 842},
        {url: "image/fives-cail-babcock/f14.jpg", width: 1191, height: 842},
        [images, [1, 1]],
        {url: "image/fives-cail-babcock/f15.jpg", width: 1191, height: 842},
        {url: "image/fives-cail-babcock/f16.jpg", width: 1191, height: 842},
        [images, [1, 1]],
        {url: "image/fives-cail-babcock/f17.jpg", width: 1191, height: 842},
        {url: "image/fives-cail-babcock/f18.jpg", width: 1191, height: 842},
        [images, [1, 1, 1]],
        {url: "image/fives-cail-babcock/f19.jpg", width: 900, height: 636},
        {url: "image/fives-cail-babcock/f20.jpg", width: 900, height: 636},
        {url: "image/fives-cail-babcock/f21.jpg", width: 900, height: 636},
    ],
}

window.exhibitionPages = exhibitionPages;