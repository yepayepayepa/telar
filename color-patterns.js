const colorPatterns = [
    [ 8 ],
    [ 36 ],
    [ 16 ],
    [ 24, 8, 4, 8, 312, 8, 4, 8, 24 ],
    [ 24, 8, 4, 8, 4, 8, 288, 8, 4, 8, 4, 8, 24 ],
    [ 100, 3, 297 ],
    [ 297, 6, 97 ],

    [ 297, 3, 3, 6, 93 ],

    [ 50, 300, 50 ],
    [ 118, 64, 118, 100 ],
    [ 168, 64, 168 ],
    [ 128, 272 ],
    [ 272, 128 ],
    [ 4, 20 ],
    [ 1, 1],
    [ 97, 1, 100, 1, 100, 1, 100],
    [ 12, 64, 128, 64 ],
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
    [400],
    [128],
    [128, 1],
    [64],
    [64, 2],

];

const colorPalettes = [

    ["#005bbb", "#ffd500"],   // PEACE FOR UKRAINE !!!

    ["#efb702", "#47acf0", "#358f49", "#ff9b9b", "#f64000", "#222222"],
    ["#c45544", "#4f4e4c", "#7e7c81", "#d3c6b3", "#e1d3b9"],
    ["#B5CDE2", "#61AFD6", "#316689", "#00326D", "#00183A"],
    ["#f64000", "#111111", "#f0e7d8"],
    ["#F2506E", "#0442BF", "#0468BF", "#A68F1F", "#F26241"],
    ["#6997BF", "#A65C41", "#59271C", "#f64000", "#F2F2F2"],
    ["#090B0D", "#9CA686", "#BFB16B", "#D9CB89", "#593636"],
    ["#D9042B", "#F2055C", "#74BF04", "#A66F0A", "#F26430"],
    ["#F20505", "#A60303", "#590202", "#120808"],
    ["#8C071F", "#303AF2", "#20268C", "#090B0D", "#A68F1F",                   "#8C071F", "#303AF2"],
    ["#025920", "#022601", "#F2AE72", "#F29C6B", "#D97855"],
    ["#40090D", "#014040", "#014040", "#4AD9A4", "#735724", "#590A0A", "#A68F1F"],
    ["#1D3D59", "#04BFBF", "#03A60E", "#D9A404", "#594225"],
    ["#D96A73", "#F26B83", "#F2507B", "#D2D3D9", "#F2C6A0"],
    ["#D9D9D9", "#B8D941", "#BED95F", "#DFF299", "#F24949", "#120808",        "#D9D9D9", "#B8D941", "#BED95F", "#DFF299", "#F24949"],
    ["#0468BF", "#0477BF", "#049DD9", "#05C7F2", "#0D0D0D"],
    ["#537073", "#D9CB0B", "#BFA211", "#BFA211", "#F24C27", "#BF2E21"],
    ["#F20544", "#F22283", "#F21DCF", "#4A1FA6", "#04BF9D"],
    ["#120808", "#e1d3b9"],
    ["#77458C", "#8D53A6", "#2F1640", "#D99E6A", "#BF947A"],
    ["#698C89", "#F27405", "#F2955E", "#F2B591", "#8C3C2A"],
    ["#db598e", "#6abca4", "#f9f2e7", "#c36c79", "#cbacd5", "#d3b79f"],
    ["#212426", "#3C3F40", "#72736E", "#D8D9CC", "#BF9D8A",                   "#D8D9CC"],
    ["#0A1C40", "#0A2740", "#6CBF69", "#AED99A", "#F2D230"],
    ["#F23D4C", "#74BF04", "#24732F", "#D9CE9A", "#0D0D0D"],
    ["#f72585", "#b5179e", "#7209b7", "#560bad", "#480ca8", "#3a0ca3", "#3f37c9", "#4361ee", "#4895ef", "#4cc9f0"],
    ["#ef476f", "#ffd166"," #06d6a0", "#118ab2", "#073b4c"],
    ["#e63946", "#f1faee", "#a8dadc", "#457b9d", "#1d3557"],
    ["#d6d6d6", "#ffee32", "#ffd100", "#202020", "#333533"],
    ["#313552", "#B8405E", "#2EB086", "#EEE6CE"],
    ["#E5E3C9", "#B4CFB0", "#94B49F", "#789395"],
    ["#ff4106", "#f0bb01", "#12a9bd", "#802003", "#fef0d9"],
    ["#ff4106", "#F76E11", "#FF9F45", "#FFBC80", "#FC4F4F"],
    ["#E02401", "#F78812", "#AB6D23", "#51050F"],
    ["#8c4b6b", "#454142", "#cfa97a", "#42774d", "#d4b891", "#ca3e1a"],
    ["#000000", "#F58840", "#B85252", "#EADEDE",                              "#000000", "#F58840", "#B85252"],
    ["#FAFAFA", "#E0BB20", "#841818", "#000000"],
    ["#3DB2FF", "#FFEDDA", "#FFB830", "#FF2442"],
    ["#082032", "#2C394B", "#334756", "#FF4C29"],
    ["#2C2E43", "#595260", "#B2B1B9", "#FFD523"],
    ["#FA1616", "#12CAD6", "#0FABBC", "#E4F9FF"],
    ["#F0E9D2", "#E6DDC4", "#678983", "#181D31"],
    ["#C8C6A7", "#92967D", "#6E7C7C", "#435560", "#181D31"],
    ["#125C13", "#3E7C17", "#F4A442", "#E8E1D9"],
    ["#a22b27", "#ec6219", "#ed8a15", "#e5d01c"],
    ["#D9D7F1", "#E7FBBE", "#FFCBCB", "#cbacd5", "#ff9b9b"],
    ["#F0E4D7", "#F5C0C0", "#FF7171", "#9FD8DF", "#f0e7d8"],
    ["#191919", "#2D4263", "#C84B31", "#ECDBBA"],
    ["#EEEBDD", "#D8B6A4", "#630000", "#000000", "#A68F1F"],
    ["#FF4646", "#FF8585", "#FFB396", "#FFF5C0"],
    ["#2C061F", "#374045", "#D89216", "#E1D89F"],
    ["#CDB30C", "#62760C", "#535204", "#523906"],
    ["#151D3B", "#D82148", "#6EBF8B", "#DADBBD"],
    ["#041C32", "#04293A", "#064663", "#ECB365"],
    ["#D4ECDD", "#345B63", "#152D35", "#112031"],
    ["#FF008E", "#f72585", "#F20505", "#4A1FA6", "#1f0b49", "#ffd100", "#03A60E"],
    ["#F5F7B2", "#1CC5DC", "#890596", "#CF0000"],
    ["#FFFBDF", "#C6FFC1", "#34656D", "#334443"],
    ["#9EDE73", "#F7EA00", "#E48900", "#BE0000", "#590A0A"],
    ["#00FFFF", "#FF00FF", "#FFFF00"],
    ["#FA1616", "#1ae51a", "#0442BF", "#1f1f1f"],
    ["#F76A8C", "#F8DC88", "#F8FAB8", "#CCF0E1"],
    ["#4D089A", "#323EDD", "#DC2ADE", "#E8F044"],
    ["#009DAE", "#71DFE7", "#C2FFF9", "#FFE652"],
    ["#4B3869", "#664E88", "#63B4B8", "#A9E4D7", "#F20505", "#f0e7d8"],
    ["#EBECF1", "#206A5D", "#678983", "#1F4068", "#1B1C25"],
    ["#D3ECA7", "#AED99A", "#A1B57D", "#B33030", "#ffd100", "#590A0A", "#19282F"],
    ["#11052C", "#3D087B", "#F43B86", "#FFE459"],
    ["#2C2E43", "#595260", "#B2B1B9", "#FFD523"],
    ["#232323", "#2940D3", "#39A9CB", "#FFEDA3"],
    ["#363636", "#99D8D0", "#B7EFCD", "#FFBCBC"],
    ["#fce4bb", "#f6b811", "#f9653e", "#e62628", "#86252c", "#6f5a79", "#62c490", "#448f6c", "#485544", "#fc6f46", "#39a5a8"],
    ["#fce4bb", "#f6b811", "#f9653e", "#e62628", "#86252c", "#6f5a79"],
    ["#62c490", "#448f6c", "#485544", "#fc6f46", "#39a5a8"],
    ["#443737", "#272121", "#FF0000", "#FF4D00"],
    ["#47E4BB", "#EC9B3B", "#E8647C", "#000000"],
]