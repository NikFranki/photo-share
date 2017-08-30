module.exports = {
    ggt: {
        cccx: [
            {'title': '证券代码', 'fields': ['zqdm','zqmc'], 'width': '30%'},
            {'title': '委托价格', 'fields': ['wtjg'], 'width': '30%'}
        ],

        jgdcx: [
            {'title': '',              'fields': ['jysMark'],          'width': '4%'},
            {'title': '交收日期',       'fields': ['zqmc', 'jsrq'],      'width': '20%'},
            {'title': '成交价/量',       'fields': ['cjjg','cjsl'],     'width': '28%'},
            {'title': '成交/清算额',     'fields': ['cjje','qsje'],     'width': '28%'},
            {'title': '交易费/其他',     'fields': ['jyf','qtfy'],      'width': '20%'}
        ],

        jgdxq: [
            {'title': '交收日期',       'fields': 'jsrq'},
            {'title': '业务名称',       'fields': 'ywdmsm'},
            {'title': '成交价格',       'fields': 'cjjg'},
            {'title': '成交数量',       'fields': 'cjsl'},
            {'title': '股份本次余额',   'fields': 'gfbcye'},
            {'title': '成交金额',       'fields': 'cjje'},
            {'title': '清算金额',       'fields': 'qsje'},
            {'title': '资金本次余额',   'fields': 'zjbcye'},
            {'title': '结算汇率',       'fields': 'jshl'},
            {'title': '交易征费',       'fields': 'jyzf'},
            {'title': '交易系统使用费',  'fields': 'jyxtsyf'},
            {'title': '交易费',         'fields': 'jyf'},
            {'title': '股份交收费',      'fields': 'gfjsf'},
            {'title': '手续费',         'fields': 'sxf'},
            {'title': '印花税',         'fields': 'yhs'},
            {'title': '前台费用',       'fields': 'qtfy'},
            {'title': '其他费用',       'fields': 'qitfy'}
        ],

        edcx: [
            {'title': '每日初始额度',     'fields': ['mrcsed']},
            {'title': '日中剩余额度',     'fields': ['rzsyed']},
            {'title': '额度状态',         'fields': ['edzt']},
            {'title': '市场交易状态',     'fields': ['scjyzt']}
        ],

        jccx: [
            {'title': '交易所',            'fields': ['jysjc'],            'width': '25%'},
            {'title': '证券类别',           'fields': ['zqlbsm'],           'width': '25%'},
            {'title': '价格区间HK$',        'fields': ['jgqj'],             'width': '25%'},
            {'title': '价位HK$',           'fields': ['jw'],                'width': '25%'}
        ],

        hlcx: [
            {'title': '币种',               'fields': ['bz']},
            {'title': '交易市场',           'fields': ['jysjc']},
            {'title': '',                   'fields': []},
            {'title': '买入参考汇率',       'fields': ['mrckhl']},
            {'title': '卖出参考汇率',       'fields': ['mcckhl']},
            {'title': '买入浮动比例',       'fields': ['mrfdhl']},
            {'title': '卖出浮动比例',       'fields': ['mcfdhl']},
            {'title': '中间参考汇率',       'fields': ['zjckhl']},
            {'title': '',                   'fields': []},
            {'title': '结算汇率',           'fields': ['jshl']},
            {'title': '使用日期',           'fields': ['syrq']}
        ],

        jyrlcx: [
            {'title': '交易所/币种',          'fields': ['jysjc','hbmc'],        'width': '20%'},
            {'title': '开始日期',             'fields': ['wlrq'],                'width': '30%'},
            {'title': '交易日期标志',         'fields': ['jyrbssm'],              'width': '30%'},
            {'title': '交收日期标志',         'fields': ['jsrbssm'],              'width': '20%'}
        ],

        bdzqcx: [
            {'title': '',              'fields': ['jysMark'],          'width': '4%'},
            {'title': '名称代码',           'fields': ['zqmc','zqdm'],            'width': '24%'},
            {'title': '整手交易状态',       'fields': ['zsjyztsm'],               'width': '24%'},
            {'title': '零股交易状态',       'fields': ['lgjyztsm'],               'width': '24%'},
            {'title': '更新日期',           'fields': ['gxrq'],                   'width': '24%'}
        ],

        wjsmxcxxq: [
            {'title': '成交日期',       'fields': 'cjrq'},
            {'title': '业务名称',       'fields': 'ywdmsm'},
            {'title': '成交价格（人民币）', 'fields': 'cjjg'},
            {'title': '成交数量',        'fields': 'cjsl'},
            {'title': '成交金额',       'fields': 'cjje'},
            {'title': '清算金额',       'fields': 'qsje'},
            {'title': '佣金',          'fields': 'yj'},
            {'title': '证管费',       'fields': 'zgf'},
            {'title': '经手费',       'fields': 'jsf'},
            {'title': '交易规费',       'fields': 'jygf'},
            {'title': '印花税',        'fields': 'yhs'},
            {'title': '结算费',         'fields': 'qsf'},
            {'title': '附加费',      'fields': 'fjf'},
            {'title': '成交编号',         'fields': 'cjbh'},
            {'title': '股东代码',         'fields': 'gddm'}
        ],

        tzxxcx: [
            {'title': '证券代码',       'fields': 'zqdm'},
            {'title': '交易日期',       'fields': 'jyrq'},
            {'title': '通知日期',       'fields': 'tzrq'},
            {'title': '通知类别',       'fields': 'tzlbsm'},
            {'title': '流通类型名称',   'fields': 'ltlbsm'},
            {'title': '权益类别名称',       'fields': 'qylbsm'},
            {'title': '挂牌年份',       'fields': 'gpnf'},
            {'title': '权益次数',   'fields': 'qycs'},
            {'title': '价格',       'fields': 'jg'},
            {'title': '币种',       'fields': 'hbmc'},
            {'title': '当前汇率',  'fields': 'hl'},
            {'title': '流水号',      'fields': 'lsh'},
            {'title': '日期1',      'fields': 'rq1'},
            {'title': '日期2',      'fields': 'rq2'},
            {'title': '日期3',      'fields': 'rq3'},
            {'title': '辅助代码1',      'fields': 'fzdm1'},
            {'title': '辅助代码2',      'fields': 'fzdm2'},
            {'title': '附加说明1',      'fields': 'fjsm1'},
            {'title': '附加说明2',      'fields': 'fjsm2'},
            {'title': '备注',         'fields': 'bz'}
        ],
    },

    sypz: {},

    wltp: {},

    gfzr: {},

    lof: {
        kysl: 'cxjg.kmsl',
        valueProcess: false,
    }
};
