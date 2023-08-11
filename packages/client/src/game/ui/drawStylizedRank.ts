type DrawFunction = (ctx: CanvasRenderingContext2D) => void;
const shapeFunctions = new Map<number, DrawFunction>();
const sf = 2.2; // Scale factor

shapeFunctions.set(0, (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.closePath();
});

shapeFunctions.set(1, (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.scale(sf, sf);
  ctx.translate(-49.066_27, -129.964_57);
  ctx.moveTo(49.037_052, 114.060_04);
  ctx.bezierCurveTo(
    47.692_645,
    113.014_01,
    41.624_723,
    112.092_76,
    45.702_874,
    87.778_647,
  );
  ctx.bezierCurveTo(
    48.099_588,
    86.450_447,
    47.194_579,
    84.930_047,
    47.110_946,
    84.501_897,
  );
  ctx.bezierCurveTo(
    47.071_006,
    84.298_337,
    46.832_592,
    83.918_907,
    46.491_794,
    83.450_827,
  );
  ctx.bezierCurveTo(
    46.590_404,
    82.946_547,
    46.682_796,
    82.453_447,
    46.788_881,
    81.931_667,
  );
  ctx.bezierCurveTo(
    46.788_881,
    81.931_667,
    47.335_633,
    78.918_277,
    45.823_956,
    80.806_957,
  );
  ctx.bezierCurveTo(
    45.594_288,
    81.093_777,
    45.355_849,
    81.396_157,
    45.113_681,
    81.706_967,
  );
  ctx.bezierCurveTo(
    44.262_349,
    80.670_887,
    43.394_789,
    79.653_537,
    43.092_706,
    79.200_407,
  );
  ctx.bezierCurveTo(
    42.452_333,
    78.237_989,
    41.984_226,
    79.200_407,
    41.984_226,
    79.200_407,
  );
  ctx.bezierCurveTo(
    41.357_588,
    81.290_037,
    36.162_219,
    84.779_017,
    28.957_11,
    88.839_667,
  );
  ctx.bezierCurveTo(
    27.274_417,
    89.789_637,
    28.957_11,
    89.964_377,
    28.957_11,
    89.964_377,
  );
  ctx.bezierCurveTo(
    33.759_267,
    89.964_377,
    37.318_131,
    89.728_357,
    39.963_251,
    89.355_237,
  );
  ctx.bezierCurveTo(
    35.976_223,
    96.436_757,
    32.795_588,
    106.008_63,
    35.383_29,
    117.434_19,
  );
  ctx.bezierCurveTo(
    35.383_29,
    117.434_19,
    36.185_937,
    120.486_24,
    38.436_595,
    120.486_24,
  );
  ctx.bezierCurveTo(
    39.824_691,
    120.486_24,
    41.029_286,
    119.802_17,
    42.183_953,
    119.104_39,
  );
  ctx.bezierCurveTo(
    44.192_443,
    117.8948,
    46.157_251,
    116.686_48,
    48.334_259,
    115.795_15,
  );
  ctx.bezierCurveTo(
    49.139_407,
    115.4667,
    50.059_393,
    114.8552,
    49.037_048,
    114.060_04,
  );
  ctx.scale(1 / sf, 1 / sf);
  ctx.closePath();
});

shapeFunctions.set(2, (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.scale(sf, sf);
  ctx.translate(-69.621_888, -87.003_819);
  ctx.moveTo(79.134_002, 66.457_149);
  ctx.bezierCurveTo(
    73.293_48,
    64.177_797,
    67.566_172,
    64.741_346,
    62.659_021,
    66.337_661,
  );
  ctx.bezierCurveTo(
    73.933_762,
    53.421_337,
    78.128_924,
    40.497_464,
    72.336_202,
    36.994_156,
  );
  ctx.bezierCurveTo(
    65.372_355,
    32.785_155,
    56.619_746,
    38.917_515,
    50.320_082,
    48.163_227,
  );
  ctx.bezierCurveTo(
    48.221_873,
    51.243_876,
    50.320_082,
    50.268_985,
    50.320_082,
    50.268_985,
  );
  ctx.bezierCurveTo(
    72.670_81,
    35.973_984,
    62.267_812,
    58.290_745,
    56.539_244,
    68.993_13,
  );
  ctx.bezierCurveTo(
    53.261_104,
    70.763_024,
    50.744_005,
    72.675_061,
    49.385_452,
    73.741_776,
  );
  ctx.bezierCurveTo(
    47.582_851,
    75.159_453,
    50.320_082,
    74.388_347,
    50.320_082,
    74.388_347,
  );
  ctx.bezierCurveTo(
    51.692_474,
    73.849_955,
    52.998_196,
    73.444_908,
    54.264_921,
    73.104_01,
  );
  ctx.bezierCurveTo(
    54.003_252,
    73.563_153,
    53.813_328,
    73.895_241,
    53.717_727,
    74.065_061,
  );
  ctx.bezierCurveTo(
    52.261_057,
    76.655_12,
    55.014_643,
    74.065_061,
    55.014_643,
    74.065_061,
  );
  ctx.bezierCurveTo(
    55.575_676,
    73.563_153,
    56.124_127,
    73.058_724,
    56.665_032,
    72.551_783,
  );
  ctx.bezierCurveTo(
    66.928_403,
    70.609_556,
    73.166_429,
    74.794_655,
    74.277_173,
    76.816_131,
  );
  ctx.bezierCurveTo(
    74.932_55,
    78.011_157,
    76.220_66,
    76.816_131,
    76.220_66,
    76.816_131,
  );
  ctx.bezierCurveTo(
    76.220_66,
    76.816_131,
    78.647_188,
    71.960_563,
    79.620_822,
    69.334_024,
  );
  ctx.bezierCurveTo(
    80.590_672,
    66.707_486,
    79.134_002,
    66.457_163,
    79.134_002,
    66.457_163,
  );
  ctx.scale(1 / sf, 1 / sf);
  ctx.closePath();
});

shapeFunctions.set(3, (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.scale(sf, sf);
  ctx.translate(-81.640_414, -140.588_27);
  ctx.moveTo(88.098_524, 108.798_91);
  ctx.bezierCurveTo(
    86.781_994,
    108.184_06,
    85.321_664,
    108.004_29,
    83.810_504,
    108.0861,
  );
  ctx.bezierCurveTo(
    87.618_774,
    104.7179,
    89.522_904,
    101.368_36,
    88.916_714,
    97.122_457,
  );
  ctx.bezierCurveTo(
    88.253_484,
    92.483_627,
    84.823_314,
    91.376_607,
    80.638_184,
    91.413_747,
  );
  ctx.bezierCurveTo(
    81.191_084,
    91.241_607,
    81.740_254,
    91.064_167,
    82.253_474,
    90.808_837,
  );
  ctx.bezierCurveTo(
    83.333_234,
    90.273_287,
    84.236_954,
    89.267_887,
    82.379_904,
    89.417_917,
  );
  ctx.bezierCurveTo(
    76.397_249,
    89.902_607,
    69.341_044,
    91.265_027,
    64.837_321,
    95.553_037,
  );
  ctx.bezierCurveTo(
    62.491_864,
    97.788_147,
    63.794_76,
    100.613_39,
    65.758_396,
    102.590_66,
  );
  ctx.bezierCurveTo(
    66.736_497,
    103.577_43,
    67.704_683,
    105.096_02,
    69.033_605,
    105.6229,
  );
  ctx.bezierCurveTo(
    71.629_477,
    106.651_82,
    70.774_103,
    103.982_79,
    71.088_982,
    102.109_64,
  );
  ctx.bezierCurveTo(
    71.450_964,
    99.963_777,
    72.705_511,
    97.662_917,
    74.320_805,
    95.736_507,
  );
  ctx.bezierCurveTo(
    77.841_467,
    97.903_427,
    82.056_344,
    102.189_01,
    78.306_345,
    109.260_07,
  );
  ctx.bezierCurveTo(
    76.5894,
    109.825_37,
    74.945_599,
    110.486_12,
    73.515_015,
    111.012_96,
  );
  ctx.bezierCurveTo(
    69.948_481,
    112.325_78,
    73.515_015,
    112.530_35,
    73.515_015,
    112.530_35,
  );
  ctx.bezierCurveTo(
    74.324_523,
    112.617_15,
    75.058_407,
    112.742_35,
    75.743_942,
    112.888_57,
  );
  ctx.bezierCurveTo(
    75.037_334,
    113.820_84,
    74.568_737,
    114.661_32,
    76.077_439,
    113.696_85,
  );
  ctx.bezierCurveTo(
    76.352_661,
    113.520_82,
    76.612_978,
    113.348_67,
    76.881_987,
    113.173_71,
  );
  ctx.bezierCurveTo(
    86.274_974,
    115.903_49,
    82.420_834,
    124.737_35,
    80.359_264,
    127.437_35,
  );
  ctx.bezierCurveTo(
    75.016_284,
    126.471_68,
    67.765_449,
    123.631_56,
    66.622_472,
    116.264_22,
  );
  ctx.bezierCurveTo(
    66.622_472,
    116.264_22,
    66.668_332,
    113.819_61,
    65.220_405,
    116.264_22,
  );
  ctx.bezierCurveTo(
    63.089_411,
    119.867_95,
    60.784_86,
    123.386_11,
    60.784_86,
    125.370_83,
  );
  ctx.bezierCurveTo(
    60.784_86,
    127.354_28,
    63.119_163,
    130.856_38,
    68.372_886,
    130.974_13,
  );
  ctx.bezierCurveTo(
    73.624_13,
    131.089_49,
    82.146_864,
    131.62,
    85.883_234,
    129.371_24,
  );
  ctx.bezierCurveTo(
    85.883_234,
    129.371_24,
    88.217_534,
    127.470_86,
    85.883_234,
    127.821_65,
  );
  ctx.bezierCurveTo(
    85.413_404,
    127.892_15,
    84.414_224,
    127.908_45,
    83.115_054,
    127.800_45,
  );
  ctx.bezierCurveTo(
    85.842_324,
    125.845_33,
    88.606_794,
    123.472_61,
    90.440_264,
    120.899_03,
  );
  ctx.bezierCurveTo(
    93.074_564,
    117.201_11,
    92.620_844,
    110.907_32,
    88.098_534,
    108.7974,
  );
  ctx.scale(1 / sf, 1 / sf);
  ctx.closePath();
});

shapeFunctions.set(4, (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.scale(sf, sf);
  ctx.translate(-86.004_996, -130.169_46);
  ctx.moveTo(93.144_414, 103.078_08);
  ctx.bezierCurveTo(
    93.932_494,
    103.439_24,
    94.378_034,
    103.7408,
    94.586_534,
    103.887_27,
  );
  ctx.bezierCurveTo(
    95.544_644,
    104.557_43,
    95.925_654,
    103.887_27,
    95.925_654,
    103.887_27,
  );
  ctx.bezierCurveTo(
    96.774_554,
    102.148_54,
    98.250_194,
    99.109_121,
    97.392_604,
    97.196_631,
  );
  ctx.bezierCurveTo(
    96.701_324,
    95.652_731,
    94.788_834,
    95.228_281,
    93.136_964,
    94.983_791,
  );
  ctx.bezierCurveTo(
    93.386_434,
    91.233_281,
    93.974_684,
    86.808_811,
    95.065_594,
    81.583_931,
  );
  ctx.bezierCurveTo(
    95.065_594,
    81.583_931,
    95.348_544,
    78.743_105,
    94.011_924,
    80.628_271,
  );
  ctx.bezierCurveTo(
    92.607_024,
    82.609_031,
    89.103_474,
    87.205_971,
    86.786_384,
    94.376_911,
  );
  ctx.bezierCurveTo(
    85.901_494,
    94.355_411,
    85.020_334,
    94.359_011,
    84.152_824,
    94.412_711,
  );
  ctx.bezierCurveTo(
    80.830_464,
    94.613_771,
    77.791_075,
    94.602_681,
    74.601_515,
    95.753_071,
  );
  ctx.bezierCurveTo(
    73.989_667,
    95.972_741,
    73.396_431,
    96.228_391,
    72.801_96,
    96.487_771,
  );
  ctx.bezierCurveTo(
    75.743_303,
    88.629_321,
    78.359_486,
    85.999_471,
    80.111_884,
    84.082_001,
  );
  ctx.bezierCurveTo(
    80.949_614,
    83.164_871,
    79.786_714,
    82.387_951,
    79.786_714,
    82.387_951,
  );
  ctx.bezierCurveTo(
    79.786_714,
    82.387_951,
    77.464_669,
    80.264_441,
    74.730_578,
    79.109_011,
  );
  ctx.bezierCurveTo(
    71.996_495,
    77.953_577,
    71.557_154,
    80.470_481,
    71.557_154,
    80.470_481,
  );
  ctx.bezierCurveTo(
    70.532_025,
    83.467_641,
    69.897_839,
    92.494_021,
    69.748_905,
    97.982_041,
  );
  ctx.bezierCurveTo(
    68.468_118,
    98.673_321,
    67.212_153,
    99.408_021,
    65.967_354,
    100.155_14,
  );
  ctx.bezierCurveTo(
    63.837_669,
    101.432_21,
    66.540_731,
    101.304_42,
    66.540_731,
    101.304_42,
  );
  ctx.bezierCurveTo(
    67.645_287,
    101.1978,
    68.7002,
    101.113_37,
    69.722_846,
    101.037_52,
  );
  ctx.bezierCurveTo(
    69.729_246,
    101.304_42,
    69.737_516,
    101.540_15,
    69.748_966,
    101.733_77,
  );
  ctx.bezierCurveTo(
    69.952_534,
    104.938_22,
    70.894_479,
    102.217_79,
    70.894_479,
    102.217_79,
  );
  ctx.bezierCurveTo(
    71.028_497,
    101.769_76,
    71.160_083,
    101.357_76,
    71.292_863,
    100.933_31,
  );
  ctx.bezierCurveTo(
    77.261_191,
    100.572_15,
    81.782_424,
    100.737_25,
    85.174_284,
    101.135_44,
  );
  ctx.bezierCurveTo(
    84.418_464,
    105.899_93,
    84.305_524,
    111.442_58,
    85.397_664,
    117.767_05,
  );
  ctx.bezierCurveTo(
    85.397_664,
    117.767_05,
    86.930_394,
    122.936_13,
    91.332_484,
    119.1087,
  );
  ctx.bezierCurveTo(
    95.734_574,
    115.2787,
    96.691_444,
    115.3743,
    96.691_444,
    115.3743,
  );
  ctx.bezierCurveTo(
    96.691_444,
    115.3743,
    97.362_864,
    114.992_02,
    96.691_444,
    114.2263,
  );
  ctx.bezierCurveTo(
    96.280_644,
    113.755_95,
    93.791_044,
    110.964_75,
    93.144_444,
    103.078_96,
  );
  ctx.scale(1 / sf, 1 / sf);
  ctx.closePath();
});

shapeFunctions.set(5, (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.scale(sf, sf);
  ctx.translate(-89.993_569, -112.6882);
  ctx.moveTo(94.939_252, 82.023_243);
  ctx.bezierCurveTo(
    91.553_592,
    80.541_753,
    85.746_642,
    81.163_033,
    79.791_422,
    82.155_503,
  );
  ctx.bezierCurveTo(
    79.444_642,
    77.560_415,
    79.565_942,
    74.240_94,
    79.898_002,
    71.760_822,
  );
  ctx.bezierCurveTo(
    80.672_432,
    72.057_443,
    81.467_682,
    72.315_902,
    82.300_922,
    72.493_592,
  );
  ctx.bezierCurveTo(
    84.401_182,
    72.940_816,
    86.562_702,
    73.021_726,
    88.702_172,
    72.856_274,
  );
  ctx.bezierCurveTo(
    90.701_962,
    72.700_733,
    92.775_262,
    72.558_595,
    94.750_522,
    72.194_573,
  );
  ctx.bezierCurveTo(
    97.380_132,
    71.708_129,
    97.480_612,
    69.201_064,
    97.111_782,
    67.125_281,
  );
  ctx.bezierCurveTo(
    96.910_812,
    65.997_945,
    95.681_792,
    60.122_416,
    93.711_422,
    61.797_46,
  );
  ctx.bezierCurveTo(
    90.012_082,
    64.942_948,
    85.549_332,
    67.081_194,
    80.987_342,
    67.008_89,
  );
  ctx.bezierCurveTo(
    81.173_602,
    66.448_908,
    81.356_172,
    65.945_287,
    81.520_372,
    65.483_32,
  );
  ctx.bezierCurveTo(
    81.929_642,
    64.327_803,
    80.574_402,
    64.066_84,
    80.574_402,
    64.066_84,
  );
  ctx.bezierCurveTo(
    80.574_402,
    64.066_84,
    77.645_801,
    63.027_714,
    74.714_756,
    63.027_714,
  );
  ctx.bezierCurveTo(
    73.233_298,
    63.027_714,
    72.647_582,
    63.655_098,
    72.428_242,
    64.275_11,
  );
  ctx.bezierCurveTo(
    72.091_272,
    64.188_35,
    71.775_129,
    64.167_536,
    71.521_481,
    64.289_22,
  );
  ctx.bezierCurveTo(
    71.015_409,
    64.530_467,
    71.618_301,
    65.441_069,
    72.465_004,
    66.396_816,
  );
  ctx.bezierCurveTo(
    73.078_903,
    70.157_448,
    75.816_348,
    78.037_691,
    77.624_971,
    82.599_723,
  );
  ctx.bezierCurveTo(
    76.790_503,
    82.973_413,
    76.399_616,
    83.780_923,
    77.243_885,
    83.725_793,
  );
  ctx.bezierCurveTo(
    77.526_927,
    83.704_593,
    77.795_294,
    83.704_593,
    78.067_324,
    83.697_593,
  );
  ctx.bezierCurveTo(
    78.389_587,
    84.474_493,
    78.670_195,
    85.115_343,
    78.873_602,
    85.523_383,
  );
  ctx.bezierCurveTo(
    80.290_112,
    88.358_853,
    80.101_412,
    85.523_383,
    80.101_412,
    85.523_383,
  );
  ctx.bezierCurveTo(
    80.031_612,
    84.894_773,
    79.975_182,
    84.302_933,
    79.920_052,
    83.714_773,
  );
  ctx.bezierCurveTo(
    90.835_512,
    84.405_853,
    91.714_092,
    94.468_463,
    89.198_442,
    98.144_553,
  );
  ctx.bezierCurveTo(
    75.710_958,
    96.718_233,
    71.117_103,
    90.602_483,
    71.117_103,
    90.602_483,
  );
  ctx.bezierCurveTo(
    59.609_799,
    113.283_79,
    102.352_61,
    98.426_363,
    95.130_382,
    98.441_073,
  );
  ctx.bezierCurveTo(
    94.907_332,
    98.442_073,
    94.692_922,
    98.438_073,
    94.472_362,
    98.434_073,
  );
  ctx.bezierCurveTo(
    101.3564,
    93.063_323,
    101.6027,
    84.941_653,
    94.939_222,
    82.026_553,
  );
  ctx.scale(1 / sf, 1 / sf);
  ctx.closePath();
});

shapeFunctions.set(6, (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.closePath();
});

shapeFunctions.set(7, (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.scale(sf, sf);
  ctx.translate(-82.570_534, -140.298_14);
  ctx.moveTo(69.064_246, 130.785_45);
  ctx.bezierCurveTo(
    68.937_529,
    130.771_35,
    68.507_977,
    130.727_25,
    68.109_698,
    130.688_05,
  );
  ctx.bezierCurveTo(
    66.622_206,
    130.542,
    64.831_95,
    130.0988,
    63.874_417,
    129.639_31,
  );
  ctx.bezierCurveTo(
    63.167_663,
    129.300_29,
    62.474_124,
    128.632_55,
    62.164_103,
    127.9929,
  );
  ctx.bezierCurveTo(
    61.820_322,
    127.2836,
    61.727_503,
    126.819_38,
    61.729_747,
    125.8205,
  );
  ctx.bezierCurveTo(
    61.732_047,
    124.776_28,
    61.824_187,
    124.2784,
    62.295_919,
    122.759_34,
  );
  ctx.bezierCurveTo(
    62.4758,
    122.180_08,
    62.742_256,
    121.3217,
    62.887_981,
    120.851_84,
  );
  ctx.bezierCurveTo(
    63.248_026,
    119.691_06,
    63.581_651,
    119.0488,
    64.107_349,
    118.504_25,
  );
  ctx.bezierCurveTo(
    64.639_781,
    117.952_75,
    65.078_961,
    117.737_98,
    65.448_089,
    117.848_54,
  );
  ctx.bezierCurveTo(
    65.824_651,
    117.961_08,
    66.101_32,
    118.331_42,
    66.713_321,
    119.540_89,
  );
  ctx.bezierCurveTo(
    67.022_742,
    120.152_42,
    67.425_37,
    120.864_82,
    67.607_996,
    121.124_01,
  );
  ctx.bezierCurveTo(
    68.326_769,
    122.143_99,
    69.681_021,
    123.389_33,
    71.039_174,
    124.279_11,
  );
  ctx.bezierCurveTo(
    71.828_344,
    124.796_14,
    73.208_557,
    125.556_94,
    73.357_559,
    125.557_08,
  );
  ctx.bezierCurveTo(
    73.492_567,
    125.557_22,
    74.041_443,
    124.650_37,
    74.563_161,
    123.5653,
  );
  ctx.bezierCurveTo(
    75.973_166,
    120.632_77,
    76.086_379,
    117.671_98,
    74.884_118,
    115.1717,
  );
  ctx.bezierCurveTo(
    74.146_958,
    113.638_71,
    72.415_408,
    111.730_57,
    70.717_851,
    110.580_66,
  );
  ctx.bezierCurveTo(
    67.525_358,
    108.418_03,
    64.660_973,
    104.056_57,
    64.197_092,
    100.651_85,
  );
  ctx.bezierCurveTo(
    63.782_317,
    97.607_558,
    65.444_791,
    95.177_838,
    69.180_977,
    93.367_848,
  );
  ctx.bezierCurveTo(
    69.515_057,
    93.205_918,
    69.788_389,
    93.055_638,
    69.788_389,
    93.033_418,
  );
  ctx.bezierCurveTo(
    69.788_389,
    93.012_218,
    69.588_434,
    93.022_818,
    69.344_03,
    93.054_618,
  );
  ctx.bezierCurveTo(
    69.099_626,
    93.086_418,
    68.499_75,
    93.104_318,
    68.010_952,
    93.091_618,
  );
  ctx.bezierCurveTo(
    67.224_788,
    93.070_418,
    67.084_259,
    93.048_918,
    66.793_084,
    92.904_648,
  );
  ctx.bezierCurveTo(
    66.535_345,
    92.776_948,
    66.459_498,
    92.702_858,
    66.443_447,
    92.563_868,
  );
  ctx.bezierCurveTo(
    66.413_817,
    92.308_808,
    66.712_439,
    92.138_138,
    68.010_956,
    91.667_358,
  );
  ctx.bezierCurveTo(
    70.687_815,
    90.696_828,
    73.547_745,
    89.913_488,
    75.844_833,
    89.521_688,
  );
  ctx.bezierCurveTo(
    77.788_734,
    89.190_078,
    78.588_918,
    89.123_438,
    80.617_582,
    89.124_008,
  );
  ctx.bezierCurveTo(
    82.680_842,
    89.124_608,
    83.458_942,
    89.196_708,
    84.929_502,
    89.524_198,
  );
  ctx.bezierCurveTo(
    86.704_942,
    89.919_488,
    87.605_702,
    90.315_198,
    88.296_462,
    91.003_458,
  );
  ctx.bezierCurveTo(
    89.533_142,
    92.235_608,
    89.749_792,
    94.250_038,
    88.922_312,
    96.822_838,
  );
  ctx.bezierCurveTo(
    88.794_222,
    97.221_128,
    88.582_172,
    97.917_298,
    88.451_012,
    98.369_878,
  );
  ctx.bezierCurveTo(
    88.007_492,
    99.900_788,
    87.747_342,
    100.511_83,
    87.276_832,
    101.127_68,
  );
  ctx.bezierCurveTo(
    86.957_112,
    101.546_18,
    86.438_032,
    101.953_14,
    86.114_462,
    102.038_97,
  );
  ctx.bezierCurveTo(
    85.513_962,
    102.198_07,
    85.155_702,
    101.838_24,
    84.372_852,
    100.288_53,
  );
  ctx.bezierCurveTo(
    84.060_182,
    99.669_538,
    83.627_832,
    98.925_038,
    83.412_112,
    98.634_108,
  );
  ctx.bezierCurveTo(
    82.356_552,
    97.210_468,
    80.479_252,
    95.706_268,
    78.496_285,
    94.695_308,
  );
  ctx.lineTo(77.704_025, 94.291_378);
  ctx.lineTo(77.373_05, 94.832_968);
  ctx.bezierCurveTo(
    75.460_292,
    97.962_808,
    74.930_201,
    101.029_22,
    75.837_763,
    103.714_13,
  );
  ctx.bezierCurveTo(
    76.568_464,
    105.875_88,
    78.033_294,
    107.637_65,
    80.628_672,
    109.4764,
  );
  ctx.bezierCurveTo(
    82.674_212,
    110.925_61,
    84.507_042,
    113.149_09,
    85.752_622,
    115.692_58,
  );
  ctx.bezierCurveTo(
    87.310_462,
    118.873_68,
    87.382_222,
    121.322_13,
    85.978_262,
    123.391_91,
  );
  ctx.bezierCurveTo(
    85.215_372,
    124.516_56,
    83.916_252,
    125.536_51,
    82.032_942,
    126.489_33,
  );
  ctx.bezierCurveTo(
    81.616_562,
    126.699_93,
    81.337_392,
    126.872_87,
    81.412_572,
    126.8735,
  );
  ctx.bezierCurveTo(
    81.487_772,
    126.874_17,
    81.867_942,
    126.8453,
    82.257_452,
    126.8033,
  );
  ctx.bezierCurveTo(
    83.430_962,
    126.685_12,
    84.586_172,
    126.913_72,
    84.704_822,
    127.287_59,
  );
  ctx.bezierCurveTo(
    84.804_622,
    127.601_92,
    84.239_022,
    127.874_86,
    81.796_542,
    128.690_69,
  );
  ctx.bezierCurveTo(
    78.801_293,
    129.691_13,
    75.982_324,
    130.347_93,
    73.343_261,
    130.660_25,
  );
  ctx.bezierCurveTo(
    72.511_406,
    130.758_65,
    69.575_512,
    130.845_46,
    69.064_25,
    130.786_19,
  );
  ctx.scale(1 / sf, 1 / sf);
  ctx.closePath();
});

export function drawStylizedRank(
  ctx: CanvasRenderingContext2D,
  rank: number,
): void {
  // Each rank has a shape.
  const shapeFunction = shapeFunctions.get(rank);
  if (shapeFunction === undefined) {
    throw new Error(`Failed to find the shape function for rank "${rank}".`);
  }

  ctx.save();
  // Move the cursor to the top-left hand corner.
  ctx.translate(60, 135);

  // Draw the respective shape on the canvas.
  shapeFunction(ctx);
  ctx.restore();
}
