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

const [title, images, paragraph] = [ui.title, ui.images, ui.paragraph];

let productPages = {

    offRoadMotorcyclePage: [
        [title],
        "Off Road Motorcycle 越野摩托",
        [images, [1]],
        {url: "image/off-road-motorcycle/orm-1.jpg", width: 1939, height: 1288},
        [paragraph],
        "MOV off-road electric vehicles provide a brand new cycling experience that satisfies the commuting needs of " +
        "congested cities and people's demand for outdoor exploration. It is a means of transportation with entertainment " +
        "features. If you are getting into off-road riding, as a beginner, you can easily control the power of the MOV " +
        "electric off-roader with just one hand. Its light body guarantees the safety of riders when operation error " +
        "happens. Powered by renewable electricity, the MOV electric off-roader is friendlier to the environment for " +
        "urban cycling transportation.",
        [paragraph],
        "The charging pile and battery replacement can help the motorcycle easily cope with various urban and off-road " +
        "scenarios. You can start the journey with one button without the coordination of the gas clutch pedal. The " +
        "motor drive also avoids the maintenance of traditional oil vehicles. The extremely light body with full power " +
        "provides a higher level of drivability that even off-road beginners can quickly master. The driving range of " +
        "the MOV electric off-roader can reach 80 kilometers, which can meet the demands for daily commuting and wild " +
        "exploration. The ordinary gear and high-speed gear are set with the former suitable for urban cycling. With " +
        "the high-speed gear, off-road enthusiasts can experience the pleasure brought by high-performance motors.",
        [images, [1, 1]],
        {url: "image/off-road-motorcycle/orm-2.jpg", width: 1500, height: 994},
        {url: "image/off-road-motorcycle/orm-3.jpg", width: 1496, height: 1288},
        [images, [1, 1]],
        {url: "image/off-road-motorcycle/orm-4.jpg", width: 1462, height: 1288},
        {url: "image/off-road-motorcycle/orm-5.jpg", width: 1500, height: 995},
        [images, [1]],
        {url: "image/product/off-road-motorcycle.jpg", width: 1500, height: 950}
    ],

    hoverCameraPage: [
        [title],
        "Drone  无人机",
        [paragraph],
        "People enjoy sharing their daily life and having more interaction with others. What we wanted to provide was " +
        "a new photo and video capturing experience for people. The product should be safe, portable and easy to use. " +
        "And it should be able to capture photos and videos in various angles to grasp the most natural and precious " +
        "moments of your life, just like your personal photographer. And that was our purpose and goal of designing " +
        "HOVER CAMERA PASSPORT.",
        [paragraph],
        "One day back in 2014 when I chatted with our founder MQ, he said: \"Can you imagine there is such " +
        "a thing that can totally ignore gravity, and once you let it go, it can just hover in the air,\" I thought that " +
        "was just crazy but on the other hand also amazing if it can be achieved with design, science and technology.",
        [paragraph],
        "Particularly in flying camera / drone industry, we find that the biggest challenge is to harmonize aesthetic " +
        "perception and product functionality. There are always trade-offs and decisions to make. Weight requirement " +
        "for a flying device is critical. The less weight, the harder for product design since there is not too much " +
        "material and weight we can manipulate. Also, in order to make the product safer and easier to use, our team " +
        "insisted using fully protective enclosure design. However this feature brought a few challenges: it compromised " +
        "the efficiency of the propulsion system and flight time of the device; it was difficult to manufacture those " +
        "components in mass product; and last but not the least it was not a trivial design task to make it look nice. " +
        "But in the end, we made it, and here it comes the Hover Camera Passport!",
        [images, [1, 1]],
        {url: "image/hover-camera/hc1.jpg", width: 757, height: 1288},
        {url: "image/hover-camera/hc2.jpg", width: 1335, height: 1288},
        [images, [1]],
        {url: "image/hover-camera/hc3.jpg", width: 1750, height: 1288},
        [images, [1]],
        {url: "image/hover-camera/hc4.jpg", width: 1850, height: 1288},
        [images, [1, 1]],
        {url: "image/hover-camera/hc5.jpg", width: 2000, height: 1123},
        {url: "image/hover-camera/hc6.jpg", width: 1000, height: 965},
        [images, [1]],
        {url: "image/hover-camera/hc7.jpg", width: 1850, height: 1288},
        [paragraph],
        "That is not only a recognition but also great encouragement to me for my career as an industrial designer. " +
        "After all, Hover Camera Passport is the first product design that I’ve done after my graduation. I hope to " +
        "see that more designs which let the life become interesting and beautiful can be transformed into real products. " +
        "When we want to design a product, firstly, we should consider how to achieve it rather than thinking about " +
        "how difficult to achieve it.",
        [images, [1]],
        {url: "image/hover-camera/hc10.jpg", width: 1631, height: 1288},
    ],

    eBicyclePage: [
        [title],
        "E-Bike  新国标电动自行车",
        [images, [9]],
        {url: "image/e-bicycle/eb1.jpg", width: 960, height: 540},
        {url: "image/e-bicycle/eb2.jpg", width: 960, height: 540},
        {url: "image/e-bicycle/eb3.jpg", width: 960, height: 540},
        {url: "image/e-bicycle/eb4.jpg", width: 960, height: 540},
        {url: "image/e-bicycle/eb5.jpg", width: 960, height: 540},
        {url: "image/e-bicycle/eb6.jpg", width: 960, height: 540},
        {url: "image/e-bicycle/eb7.jpg", width: 960, height: 540},
        {url: "image/e-bicycle/eb8.jpg", width: 960, height: 540},
        {url: "image/e-bicycle/eb9.jpg", width: 960, height: 540},
        [images, [1, 1]],
        {url: "image/e-bicycle/eb10.jpg", width: 1356, height: 1288},
        {url: "image/e-bicycle/eb11.jpg", width: 966, height: 1288},
        [images, [1, 1]],
        {url: "image/e-bicycle/eb12.jpg", width: 966, height: 1288},
        {url: "image/e-bicycle/eb13.jpg", width: 1356, height: 1288},
        [images, [1, 1]],
        {url: "image/e-bicycle/eb14.jpg", width: 966, height: 1288},
        {url: "image/e-bicycle/eb15.jpg", width: 966, height: 1288},
        [images, [1, 1]],
        {url: "image/e-bicycle/eb16.jpg", width: 900, height: 1200},
        {url: "image/e-bicycle/eb17.jpg", width: 1932, height: 1288},
        [images, [1]],
        {url: "image/e-bicycle/eb18.jpg", width: 1932, height: 1288}
    ],

    eMopedPage: [
        [title],
        "E-MOPED  电动踏板",
        [images, [1]],
        {url: "image/e-moped/em1.jpg", width: 1428, height: 1288},
        [images, [1, 1, 1]],
        {url: "image/e-moped/em2.jpg", width: 900, height: 506},
        {url: "image/e-moped/em3.jpg", width: 900, height: 506},
        {url: "image/e-moped/em4.jpg", width: 900, height: 506},
        [images, [1, 1, 1]],
        {url: "image/e-moped/em5.jpg", width: 900, height: 506},
        {url: "image/e-moped/em6.jpg", width: 900, height: 506},
        {url: "image/e-moped/em7.jpg", width: 900, height: 506},
        [images, [1, 1, 1]],
        {url: "image/e-moped/em8.jpg", width: 900, height: 506},
        {url: "image/e-moped/em9.jpg", width: 900, height: 506},
        {url: "image/e-moped/em10.jpg", width: 900, height: 506},
        [images, [1, 1, 1]],
        {url: "image/e-moped/em11.jpg", width: 900, height: 506},
        {url: "image/e-moped/em12.jpg", width: 900, height: 506},
        {url: "image/e-moped/em13.jpg", width: 900, height: 506},
        [images, [1, 1, 1]],
        {url: "image/e-moped/em14.jpg", width: 900, height: 506},
        {url: "image/e-moped/em15.jpg", width: 900, height: 506},
        {url: "image/e-moped/em16.jpg", width: 900, height: 506},
        [images, [1]],
        {url: "image/e-moped/em17.jpg", width: 1272, height: 1288},
        [images, [1, 1, 1]],
        {url: "image/e-moped/em18.jpg", width: 859, height: 928},
        {url: "image/e-moped/em19.jpg", width: 859, height: 1288},
        {url: "image/e-moped/em20.jpg", width: 859, height: 1288},
        [images, [1, 1]],
        {url: "image/e-moped/em21.jpg", width: 1428, height: 1288},
        {url: "image/e-moped/em22.jpg", width: 859, height: 1288},
    ],

    censerPage: [
        [title],
        "Censer  转乾/转钱 香炉",
        [paragraph],
        "磁悬浮香炉，内部具有磁悬浮装置，托板上有吉凶区域，根据香灰落下的位置，可预测今日运势，为生活增加乐趣。",
        [images, [1, 3]],
        {url: "image/censer/c1.jpg", width: 1036, height: 1080},
        {url: "image/censer/c2.jpg", width: 900, height: 798},
        {url: "image/censer/c3.jpg", width: 900, height: 506},
        {url: "image/censer/c4.jpg", width: 900, height: 533},
        [images, [1]],
        {url: "image/censer/c5.jpg", width: 1920, height: 1080}
    ],

    sunnyCubePage: [
        [title],
        "SUNNY CUBE 光盒消毒",
        [images, [15]],
        {url: "image/sunny-cube/sc1.jpg", width: 1500, height: 843},
        {url: "image/sunny-cube/sc2.jpg", width: 1500, height: 843},
        {url: "image/sunny-cube/sc3.jpg", width: 1500, height: 843},
        {url: "image/sunny-cube/sc4.jpg", width: 1500, height: 843},
        {url: "image/sunny-cube/sc5.jpg", width: 1500, height: 843},
        {url: "image/sunny-cube/sc6.jpg", width: 1500, height: 843},
        {url: "image/sunny-cube/sc7.jpg", width: 1499, height: 843},
        {url: "image/sunny-cube/sc8.jpg", width: 1410, height: 793},
        {url: "image/sunny-cube/sc9.jpg", width: 1410, height: 793},
        {url: "image/sunny-cube/sc10.jpg", width: 1410, height: 793},
        {url: "image/sunny-cube/sc11.jpg", width: 1500, height: 843},
        {url: "image/sunny-cube/sc12.jpg", width: 1500, height: 843},
        {url: "image/sunny-cube/sc13.jpg", width: 1500, height: 843},
        {url: "image/sunny-cube/sc14.jpg", width: 1500, height: 843},
        {url: "image/sunny-cube/sc15.jpg", width: 1500, height: 843},
    ],

    bigDogPage: [
        [title],
        "BIG DOG  电动跨骑",
        [paragraph],
        "BlG DOG电动车为人们提供科技感的外观与智能化骑行体验，以仿赛摩托车的速度搭配智能化操控体验，城市交通更为便利，在满足通勤需求的同时给予" +
        "丰富娱乐性。采用新能源可再生电力驱动，体现资源循环，可持续发展理念，对城市自行车交通环境更友好。BlG DOG电动车电池组支持快充四小时可" +
        "充电80%，工况下的续航能力在170km。中置风冷电机具备五个机械档位 配套有前倒立式减震器，后中央减震器，前后17寸铝合金轮毂，采用液晶仪表，" +
        "全车LED灯源，智能中控系统，制动能量回收系统，前置摄像头，前后碟刹双通道ABS，半热熔轮胎，保证了优越的性能。无需驾驶员的配合电机免去了" +
        "传统油车的维护，BlG DOG续航里程可达100公里，满足日常通勤和野外探险的需求，普通档位和高速档位设置，普通档适合城市骑行，高速档让越野" +
        "爱好者体验高性能电机带来的乐趣。BlG DOG车头安有手机充电仓，保证随身通讯工具电量。车身侧边延伸为骑行者腿部提供舒适区域，防止长时间骑行" +
        "对腿部造成疲劳。",
        [images, [1, 1]],
        {url: "image/big-dog/bd1.jpg", width: 580, height: 1288},
        {url: "image/big-dog/bd2.jpg", width: 2295, height: 1288},
        [images, [1]],
        {url: "image/big-dog/bd3.jpg", width: 2295, height: 1288},
        [images, [1, 1, 1]],
        {url: "image/big-dog/bd4.jpg", width: 580, height: 1288},
        {url: "image/big-dog/bd5.jpg", width: 580, height: 1288},
        {url: "image/big-dog/bd6.jpg", width: 1913, height: 1288},
        [images, [1, 1]],
        {url: "image/big-dog/bd7.jpg", width: 700, height: 1244},
        {url: "image/big-dog/bd8.jpg", width: 2295, height: 1288},
        [images, [3]],
        {url: "image/big-dog/bd9.jpg", width: 2295, height: 1288},
        {url: "image/big-dog/bd10.jpg", width: 2295, height: 1288},
        {url: "image/big-dog/bd11.jpg", width: 2295, height: 1288},
    ],

    exoskeletonInsolePage: [
        [title],
        "Exoskeleton Insole 参数化鞋垫",
        [paragraph],
        "According to individual foot problems, the data are collected by foot pressure and edited by parametric algorithm " +
        "to generate the exoskeleton insole with the corrective effect. Foot problems can lead to soreness and deformity " +
        "of feet and long and short legs and other problems. According to each person's different foot problems, the data " +
        "are collected by foot pressure instrument and edited by parametric algorithm to generate the exoskeleton insole " +
        "with the corrective effect. For example, for flat feet, gait can be adjusted by adding support to the arch of " +
        "the foot and adjusting the insole angle.",
        [paragraph],
        "The parametric algorithm takes healthy feet as the basic model to establish parametric data points, changes " +
        "parameters according to different foot problems, and generates optimal results to solve different problems. " +
        "The design inspiration of the algorithm comes from the lightweight skeleton of the bird. It uses a light weight " +
        "and strong supporting force structure as an exoskeleton and establishes stress points and shock absorption " +
        "areas according to the foot pressure characteristics to solve the biomechanics problems caused by excessive " +
        "local pressure, uneven force and insufficient supporting force. Exoskeleton insole is composed of half cushion " +
        "and full cushion, which is similar to the relationship between skeleton and muscle. The half cushion is made of " +
        "hard material, which plays a supporting and adjusting role. The full cushion is made of soft material and is " +
        "used with half cushion to reduce vibration and friction. For example, if the arch of the foot is too high, it " +
        "is necessary to deepen the heel cup, increase the stability of the heel, and strengthen the shock absorption " +
        "force of the foot.",
        [paragraph],
        "根据个人不同的脚部问题，通过脚部压力采集数据，将数据进行参数化算法编辑，生成有矫正作用的外骨骼鞋垫。脚部问题会导致脚酸痛，变形，长短腿" +
        "等问题。根据每个人不同的脚部问题，通过脚部压力仪器采集数据，将数据进行参数化算法编辑，生成有矫正作用的外骨骼鞋垫。例如：扁平足，在足弓处" +
        "增加支撑，并调整鞋垫角度，能够调整步态。参数化算法，以健康的脚作为基础模型，建立参数化数据点，根据不同的脚部问题改变参数，生成解决不同问题" +
        "的最优结果。算法的设计灵感来自于飞鸟的轻质化骨骼，用重量轻且支撑力强的结构作一个外骨骼，根据脚部压力特征建立受力点和减震区域，解决因局部" +
        "压力过大，受力不均，支撑力不足等导致的生物力学问题。外骨骼鞋垫由半垫加全垫的形式组成，类似于骨骼与肌肉的关系。半垫为硬质材质，起到支撑，" +
        "调整的作用。全垫为软材质，配合半垫使用，起减震、减小摩擦的作用。例如：足弓过高，需要加深足跟杯，增加脚跟的稳定性，并加强脚部吸震力。",
        [images, [10]],
        {url: "image/exoskeleton-insole/ei1.jpg", width: 1793, height: 1288},
        {url: "image/exoskeleton-insole/ei2.jpg", width: 1793, height: 1288},
        {url: "image/exoskeleton-insole/ei3.jpg", width: 1793, height: 1288},
        {url: "image/exoskeleton-insole/ei4.jpg", width: 1793, height: 1288},
        {url: "image/exoskeleton-insole/ei5.jpg", width: 1793, height: 1288},
        {url: "image/exoskeleton-insole/ei6.jpg", width: 2297, height: 1288},
        {url: "image/exoskeleton-insole/ei7.jpg", width: 2297, height: 1288},
        {url: "image/exoskeleton-insole/ei8.jpg", width: 1793, height: 1288},
        {url: "image/exoskeleton-insole/ei9.jpg", width: 2297, height: 1288},
        {url: "image/exoskeleton-insole/ei10.jpg", width: 1793, height: 1288},
    ],

    modularRouterPage: [
        [title],
        "Router 路由器",
        [images, [9]],
        {url: "image/modular-router/r1.jpg", width: 1500, height: 843},
        {url: "image/modular-router/r2.jpg", width: 1500, height: 843},
        {url: "image/modular-router/r3.jpg", width: 1500, height: 843},
        {url: "image/modular-router/r4.jpg", width: 1500, height: 843},
        {url: "image/modular-router/r5.jpg", width: 1410, height: 793},
        {url: "image/modular-router/r6.jpg", width: 1500, height: 843},
        {url: "image/modular-router/r7.jpg", width: 1410, height: 793},
        {url: "image/modular-router/r8.jpg", width: 1410, height: 793},
        {url: "image/modular-router/r9.jpg", width: 1410, height: 793},
        [images, [1, 1, 1]],
        {url: "image/modular-router/r10.jpg", width: 900, height: 506},
        {url: "image/modular-router/r11.jpg", width: 900, height: 506},
        {url: "image/modular-router/r12.jpg", width: 900, height: 506},
        [images, [1, 1, 1]],
        {url: "image/modular-router/r13.jpg", width: 900, height: 506},
        {url: "image/modular-router/r14.jpg", width: 900, height: 506},
        {url: "image/modular-router/r15.jpg", width: 900, height: 506},
    ],

    momentumPage: [
        [title],
        "Momentum  莫曼顿",
        [images, [1]],
        {url: "image/momentum/m1.jpg", width: 2290, height: 1288},
        [images, [1, 1]],
        {url: "image/momentum/m2.jpg", width: 1500, height: 1000},
        {url: "image/momentum/m3.jpg", width: 1500, height: 1000},
        [images, [1, 1]],
        {url: "image/momentum/m4.jpg", width: 1500, height: 1172},
        {url: "image/momentum/m5.jpg", width: 1500, height: 1000}
    ],

    mooaPage: [
        [title],
        "MOOA 锅具设计",
        [images, [23]],
        {url: "image/mooa/mo1.jpg", width: 1920, height: 1080},
        {url: "image/mooa/mo2.jpg", width: 1920, height: 1080},
        {url: "image/mooa/mo3.jpg", width: 1920, height: 1080},
        {url: "image/mooa/mo4.jpg", width: 1920, height: 1080},
        {url: "image/mooa/mo5.jpg", width: 1920, height: 1080},
        {url: "image/mooa/mo6.jpg", width: 1920, height: 1080},
        {url: "image/mooa/mo7.jpg", width: 1920, height: 1080},
        {url: "image/mooa/mo8.jpg", width: 2500, height: 1406},
        {url: "image/mooa/mo9.jpg", width: 2500, height: 1406},
        {url: "image/mooa/mo10.jpg", width: 2500, height: 1406},
        {url: "image/mooa/mo11.jpg", width: 2500, height: 1406},
        {url: "image/mooa/mo12.jpg", width: 2500, height: 1406},
        {url: "image/mooa/mo13.jpg", width: 2500, height: 1406},
        {url: "image/mooa/mo14.jpg", width: 2500, height: 1406},
        {url: "image/mooa/mo15.jpg", width: 2500, height: 1406},
        {url: "image/mooa/mo16.jpg", width: 2500, height: 1406},
        {url: "image/mooa/mo17.jpg", width: 2500, height: 1406},
        {url: "image/mooa/mo18.jpg", width: 2500, height: 1406},
        {url: "image/mooa/mo19.jpg", width: 2500, height: 1406},
        {url: "image/mooa/mo20.jpg", width: 2500, height: 1406},
        {url: "image/mooa/mo21.jpg", width: 2500, height: 1406},
        {url: "image/mooa/mo22.jpg", width: 2500, height: 1406},
        {url: "image/mooa/mo23.jpg", width: 2500, height: 1406},
    ],

    ophthalmologicalPage: [
        [title],
        "Ophthalmological  眼科产品",
        [paragraph],
        "家用眼部护理（to C）",
        [images, [1]],
        {url: "image/ophthalmological/o1.jpg", width: 1717, height: 1054},
        [images, [1, 1]],
        {url: "image/ophthalmological/o2.jpg", width: 1500, height: 921},
        {url: "image/ophthalmological/o3.jpg", width: 1500, height: 921},
        [images, [1, 1]],
        {url: "image/ophthalmological/o4.jpg", width: 1500, height: 921},
        {url: "image/ophthalmological/o5.jpg", width: 1500, height: 921},
        [paragraph],
        "to B",
        [images, [2, 1]],
        {url: "image/ophthalmological/o6.jpg", width: 900, height: 464},
        {url: "image/ophthalmological/o7.jpg", width: 900, height: 464},
        {url: "image/ophthalmological/o8.jpg", width: 2000, height: 1030},
        [images, [2, 1]],
        {url: "image/ophthalmological/o9.jpg", width: 900, height: 464},
        {url: "image/ophthalmological/o10.jpg", width: 900, height: 464},
        {url: "image/ophthalmological/o11.jpg", width: 2000, height: 1030},
        [images, [1, 1]],
        {url: "image/ophthalmological/o12.jpg", width: 900, height: 464},
        {url: "image/ophthalmological/o13.jpg", width: 2000, height: 1030}
    ],

    medicalProductPage: [
        [title],
        "Medical Product  医用产品",
        [paragraph],
        "医用药雾吸入产品，内部有两个顶针，胶囊放入后，同时按下左右键，刺破胶囊释放药雾粉末，吸入治疗。",
        [images, [1]],
        {url: "image/medical-product/mp1.jpg", width: 2500, height: 1767},
        [images, [1, 1]],
        {url: "image/medical-product/mp2.jpg", width: 1500, height: 1182},
        {url: "image/medical-product/mp3.jpg", width: 1500, height: 1182},
        [images, [1, 1]],
        {url: "image/medical-product/mp4.jpg", width: 1500, height: 1061},
        {url: "image/medical-product/mp5.jpg", width: 1500, height: 1061},
    ],

    cmfPage : [
        [title], "CMF  颜色材料工艺",
        [paragraph], "作为设计展现的一部分，每一个产品的CMF都需要经过反复设计测试，这里列举一种一个产品作为案例。",
        [images, [1, 1, 1]],
        {url: "image/cmf/cm1.jpg", width: 595, height: 842},
        {url: "image/cmf/cm2.jpg", width: 595, height: 842},
        {url: "image/cmf/cm3.jpg", width: 595, height: 842},
        [images, [1, 1, 1]],
        {url: "image/cmf/cm4.jpg", width: 595, height: 842},
        {url: "image/cmf/cm5.jpg", width: 595, height: 842},
        {url: "image/cmf/cm6.jpg", width: 595, height: 842},
        [images, [1, 1, 1]],
        {url: "image/cmf/cm7.jpg", width: 595, height: 842},
        {url: "image/cmf/cm8.jpg", width: 595, height: 842},
        {url: "image/cmf/cm9.jpg", width: 595, height: 842},
        [images, [1, 1, 1, 1]],
        {url: "image/cmf/cm10.jpg", width: 595, height: 842},
        {url: "image/cmf/cm11.jpg", width: 595, height: 842},
        {url: "image/cmf/cm12.jpg", width: 595, height: 842},
        {url: "image/cmf/cm13.jpg", width: 595, height: 842},
        [images, [1, 1, 1, 1]],
        {url: "image/cmf/cm14.jpg", width: 595, height: 842},
        {url: "image/cmf/cm15.jpg", width: 595, height: 842},
        {url: "image/cmf/cm16.jpg", width: 595, height: 842},
        {url: "image/cmf/cm17.jpg", width: 595, height: 842},
    ],

    sterilizingEquipmentPage : [
        [title], "Sterilizing Equipment 地铁消毒设备",
        [paragraph], "疫情期间地铁消杀设备，带有两组机械臂，可消杀扶手，同时设备有打开式紫外线消毒灯，可消毒座椅等，底座为智能化轨迹托盘，可定时定路线进行消杀。",
        [images, [1, 1, 1]],
        {url: "image/sterilizing-equipment/se1.jpg", width: 900, height: 1051},
        {url: "image/sterilizing-equipment/se2.jpg", width: 700, height: 672},
        {url: "image/sterilizing-equipment/se3.jpg", width: 800, height: 768},
        [images, [1, 1]],
        {url: "image/sterilizing-equipment/se4.jpg", width: 1341, height: 1288},
        {url: "image/sterilizing-equipment/se5.jpg", width: 1341, height: 1288},
        [images, [1, 1, 1]],
        {url: "image/sterilizing-equipment/se6.jpg", width: 800, height: 768},
        {url: "image/sterilizing-equipment/se7.jpg", width: 800, height: 768},
        {url: "image/sterilizing-equipment/se8.jpg", width: 800, height: 768},
        [images, [1, 1]],
        {url: "image/sterilizing-equipment/se9.jpg", width: 1500, height: 948},
        {url: "image/sterilizing-equipment/se10.jpg", width: 1500, height: 843},
        [images, [2]],
        {url: "image/sterilizing-equipment/se11.jpg", width: 2293, height: 1288},
        {url: "image/sterilizing-equipment/se12.jpg", width: 2293, height: 1288}
    ],

    aiPage : [
        [title], "AI 生成（Midjouney  SD）",
        [images, [1, 1]],
        {url: "image/ai/ai1.jpg", width: 1500, height: 844},
        {url: "image/ai/ai2.jpg", width: 1500, height: 1045},
        [images, [1, 1]],
        {url: "image/ai/ai3.jpg", width: 1500, height: 844},
        {url: "image/ai/ai4.jpg", width: 1500, height: 1029},
        [images, [1]],
        {url: "image/ai/ai5.jpg", width: 2500, height: 1288},
        [images, [1, 1]],
        {url: "image/ai/ai6.jpg", width: 1500, height: 844},
        {url: "image/ai/ai7.jpg", width: 1500, height: 844},
        [images, [1, 1]],
        {url: "image/ai/ai8.jpg", width: 1500, height: 844},
        {url: "image/ai/ai9.jpg", width: 1500, height: 842},
        [images, [1, 1]],
        {url: "image/ai/ai10.jpg", width: 1500, height: 842},
        {url: "image/ai/ai11.jpg", width: 1500, height: 842},
        [images, [1, 1]],
        {url: "image/ai/ai12.jpg", width: 1500, height: 733},
        {url: "image/ai/ai13.jpg", width: 1500, height: 904},
    ],
}

window.productPages = productPages;