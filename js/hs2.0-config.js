module.exports = {
    ggt: {
        cccx: [
            {'title': '证券代码', 'fields': ['zqdm','zqmc'], 'width': '30%'},
            {'title': '委托价格', 'fields': ['wtjg'], 'width': '30%'}
        ],

        jgdcx: [
            {'title': '成交时间',       'fields': ['zqmc','jsrq'],      'width': '30%'},
            {'title': '成交价/数量',     'fields': ['cjjg', 'cjsl'],    'width': '25%'},
            {'title': '标识',           'fields': ['mmlbsm'],  'width': '20%'},
            {'title': '佣金',           'fields': ['bzsxf'],            'width': '25%'}
        ],

        edcx: [
            {'title': '每日初始额度',     'fields': ['mrcsed']},
            {'title': '当日剩余额度',     'fields': ['rzsyed']},
            {'title': '额度状态',         'fields': ['edzt']}
        ],

        jgdxq: [
            {'title': '买卖标志',       'fields': 'mmlbsm'},
            {'title': '成交价格（港币）','fields': 'cjjg'},
            {'title': '成交时间',       'fields': 'cjsj'},
            {'title': '委托日期',       'fields': 'wtrq'},
            {'title': '业务标志',       'fields': 'ywdmsm'},
            {'title': '委托编号','fields': 'wtbh'},
            {'title': '发生数量','fields': 'fssl'},
            {'title': '佣金（人民币）','fields': 'bzsxf'},
            {'title': '印花税（人民币）','fields': 'yhs'},
            {'title': '股份交收费（人民币）','fields': 'gfjsf'},
            {'title': '其他费（人民币）','fields': 'jyxtsyf'},
            {'title': '备注','fields': 'bz'}
        ],

        jccx: [
            {'title': '价差类型',       'fields': ['zqlbsm'],               'width': '25%'},
            {'title': '起点价格',       'fields': ['jgxx'],                 'width': '25%'},
            {'title': '终点价格',       'fields': ['jgsx'],                 'width': '25%'},
            {'title': '价差',           'fields': ['jw'],                   'width': '25%'}
        ],

        hlcx: [
            {'title': '买入汇率',       'fields': ['mrckhl'],       'width': '25%'},
            {'title': '卖出汇率',       'fields': ['mcckhl'],       'width': '25%'},
            {'title': '中间汇率',       'fields': ['zjckhl'],       'width': '25%'},
            {'title': '适用日期',       'fields': ['syrq'],         'width': '25%'},
        ],

        jyrlcx: [
            {'title': '交易日期',       'fields': ['wlrq'],         'width': '25%'},
            {'title': '交易类别',       'fields': ['jysjc'],        'width': '25%'},
            {'title': '交易标志',       'fields': ['jyrbssm'],      'width': '25%'},
            {'title': '清算标志',       'fields': ['jsrbssm'],      'width': '25%'},
        ],

        bdzqcx: [
            {'title': '证券代码',       'fields': ['zqdm'],         'width': '25%'},
            {'title': '证券名称',       'fields': ['zqmc'],         'width': '25%'},
            {'title': '交易市场',       'fields': ['jysjc'],        'width': '25%'},
            {'title': '买入单位',       'fields': ['mrdw'],         'width': '25%'}
        ]
    },

    sypz: {},

    wltp: {},

    gfzr: {isOpenZSMM:false}, //东证-股转-关闭做市买卖

    lof: {
        kysl: 'cxjg.kysl',
        valueProcess: true,
    }
};
