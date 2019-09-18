const cachedSocialSecTables = ({
	"ColaTable":[
		{"year":1975,"Cola":8},{"year":1976,"Cola":6.4},{"year":1977,"Cola":5.9},
		{"year":1978,"Cola":6.5},{"year":1979,"Cola":9.9},{"year":1980,"Cola":14.3},
		{"year":1981,"Cola":11.2},{"year":1982,"Cola":7.4},{"year":1983,"Cola":3.5},
		{"year":1984,"Cola":3.5},{"year":1985,"Cola":3.1},{"year":1986,"Cola":1.3},
		{"year":1987,"Cola":4.2},{"year":1988,"Cola":4},{"year":1989,"Cola":4.7},
		{"year":1990,"Cola":5.4},{"year":1991,"Cola":3.7},{"year":1992,"Cola":3},
		{"year":1993,"Cola":2.6},{"year":1994,"Cola":2.8},{"year":1995,"Cola":2.6},
		{"year":1996,"Cola":2.9},{"year":1997,"Cola":2.1},{"year":1998,"Cola":1.3},
		{"year":1999,"Cola":2.5},{"year":2000,"Cola":3.5},{"year":2001,"Cola":2.6},
		{"year":2002,"Cola":1.4},{"year":2003,"Cola":2.1},{"year":2004,"Cola":2.7},
		{"year":2005,"Cola":4.1},{"year":2006,"Cola":3.3},{"year":2007,"Cola":2.3},
		{"year":2008,"Cola":5.8},{"year":2009,"Cola":0},{"year":2010,"Cola":0},
		{"year":2011,"Cola":3.6},{"year":2012,"Cola":1.7},{"year":2013,"Cola":1.5},
		{"year":2014,"Cola":1.7},{"year":2015,"Cola":0},{"year":2016,"Cola":0.3},
		{"year":2017,"Cola":2},{"year":2018,"Cola":2.8}
	],
	"benefitReductionTable":[
		{"year":1924,"NormalRetirementAge":65,"PctCreditForEachDelayYear":3,"yearsFrom62":[0.8,0.8666666667,0.9333333333,1,1.03,1.06,1.09,1.12,1.15]},
		{"year":1925,"NormalRetirementAge":65,"PctCreditForEachDelayYear":3.5,"yearsFrom62":[0.8,0.8666666667,0.9333333333,1,1.035,1.07,1.105,1.14,1.175]},
		{"year":1926,"NormalRetirementAge":65,"PctCreditForEachDelayYear":3.5,"yearsFrom62":[0.8,0.8666666667,0.9333333333,1,1.035,1.07,1.105,1.14,1.175]},
		{"year":1927,"NormalRetirementAge":65,"PctCreditForEachDelayYear":4,"yearsFrom62":[0.8,0.8666666667,0.9333333333,1,1.04,1.08,1.12,1.16,1.2]},
		{"year":1928,"NormalRetirementAge":65,"PctCreditForEachDelayYear":4,"yearsFrom62":[0.8,0.8666666667,0.9333333333,1,1.04,1.08,1.12,1.16,1.2]},
		{"year":1929,"NormalRetirementAge":65,"PctCreditForEachDelayYear":4.5,"yearsFrom62":[0.8,0.8666666667,0.9333333333,1,1.045,1.09,1.135,1.18,1.225]},
		{"year":1930,"NormalRetirementAge":65,"PctCreditForEachDelayYear":4.5,"yearsFrom62":[0.8,0.8666666667,0.9333333333,1,1.045,1.09,1.135,1.18,1.225]},
		{"year":1931,"NormalRetirementAge":65,"PctCreditForEachDelayYear":5,"yearsFrom62":[0.8,0.8666666667,0.9333333333,1,1.05,1.1,1.15,1.2,1.25]},
		{"year":1932,"NormalRetirementAge":65,"PctCreditForEachDelayYear":5,"yearsFrom62":[0.8,0.8666666667,0.9333333333,1,1.05,1.1,1.15,1.2,1.25]},
		{"year":1933,"NormalRetirementAge":65,"PctCreditForEachDelayYear":5.5,"yearsFrom62":[0.8,0.8666666667,0.9333333333,1,1.055,1.11,1.165,1.22,1.275]},
		{"year":1934,"NormalRetirementAge":65,"PctCreditForEachDelayYear":5.5,"yearsFrom62":[0.8,0.8666666667,0.9333333333,1,1.055,1.11,1.165,1.22,1.275]},
		{"year":1935,"NormalRetirementAge":65,"PctCreditForEachDelayYear":6,"yearsFrom62":[0.8,0.8666666667,0.9333333333,1,1.06,1.12,1.18,1.24,1.3]},
		{"year":1936,"NormalRetirementAge":65,"PctCreditForEachDelayYear":6,"yearsFrom62":[0.8,0.8666666667,0.9333333333,1,1.06,1.12,1.18,1.24,1.3]},
		{"year":1937,"NormalRetirementAge":65,"PctCreditForEachDelayYear":6.5,"yearsFrom62":[0.8,0.8666666667,0.9333333333,1,1.065,1.13,1.195,1.26,1.325]},
		{"year":1938,"NormalRetirementAge":65.16666667,"PctCreditForEachDelayYear":6.6,"yearsFrom62":[0.7916666667,0.8555555556000001,0.9222222222,0.9888888889,1.0541666669999998,1.119166667,1.185166667,1.251166667,1.314166667]},
		{"year":1939,"NormalRetirementAge":65.33333333,"PctCreditForEachDelayYear":7,"yearsFrom62":[0.7833333333,0.8444444444,0.9111111111,0.9777777778,1.046666667,1.1166666669999998,1.186666667,1.256666667,1.326666667]},
		{"year":1940,"NormalRetirementAge":65.5,"PctCreditForEachDelayYear":7,"yearsFrom62":[0.775,0.8333333333,0.9,0.9666666667,1.035,1.105,1.175,1.245,1.315]},
		{"year":1941,"NormalRetirementAge":65.66666667,"PctCreditForEachDelayYear":7.5,"yearsFrom62":[0.7666666666999999,0.8222222222000001,0.8888888889000001,0.9555555556,1.025,1.1,1.175,1.25,1.325]},
		{"year":1942,"NormalRetirementAge":65.83333333,"PctCreditForEachDelayYear":7.5,"yearsFrom62":[0.7583333333,0.8111111111,0.8777777778,0.9444444444,1.0125,1.0875,1.1625,1.2375,1.3125]},
		{"year":1943,"NormalRetirementAge":66,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24,1.32]},
		{"year":1944,"NormalRetirementAge":66,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24,1.32]},
		{"year":1945,"NormalRetirementAge":66,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24,1.32]},
		{"year":1946,"NormalRetirementAge":66,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24,1.32]},
		{"year":1947,"NormalRetirementAge":66,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24,1.32]},
		{"year":1948,"NormalRetirementAge":66,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24,1.32]},
		{"year":1949,"NormalRetirementAge":66,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24,1.32]},
		{"year":1950,"NormalRetirementAge":66,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24,1.32]},
		{"year":1951,"NormalRetirementAge":66,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24,1.32]},
		{"year":1952,"NormalRetirementAge":66,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24,1.32]},
		{"year":1953,"NormalRetirementAge":66,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24,1.32]},
		{"year":1954,"NormalRetirementAge":66,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24,1.32]},
		{"year":1955,"NormalRetirementAge":66.16666667,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7416666667,0.7916666667,0.8555555556000001,0.9222222222,0.9888888889,1.066666667,1.1466666669999999,1.226666667,1.306666667]},
		{"year":1956,"NormalRetirementAge":66.33333333,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7333333333000001,0.7833333333,0.8444444444,0.9111111111,0.9777777778,1.053333333,1.1333333330000002,1.213333333,1.2933333329999999]},
		{"year":1957,"NormalRetirementAge":66.5,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.725,0.775,0.8333333333,0.9,0.9666666667,1.04,1.12,1.2,1.28]},
		{"year":1958,"NormalRetirementAge":66.66666667,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7166666667,0.7666666666999999,0.8222222222000001,0.8888888889000001,0.9555555556,1.026666667,1.1066666669999998,1.186666667,1.266666667]},
		{"year":1959,"NormalRetirementAge":66.83333333,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7083333333,0.7583333333,0.8111111111,0.8777777778,0.9444444444,1.013333333,1.0933333330000001,1.173333333,1.253333333]},
		{"year":1960,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1961,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1962,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1963,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1964,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1965,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1966,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1967,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1968,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1969,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1970,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1971,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1972,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1973,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1974,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1975,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1976,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1977,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1978,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1979,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1980,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1981,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1982,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1983,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1984,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1985,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1986,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1987,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1988,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1989,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1990,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1991,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1992,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1993,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1994,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1995,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1996,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1997,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1998,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":1999,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2000,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2001,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2002,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2003,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2004,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2005,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2006,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2007,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2008,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2009,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2010,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2011,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2012,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2013,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2014,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2015,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2016,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2017,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2018,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2019,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2020,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2021,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2022,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2023,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2024,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2025,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2026,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2027,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2028,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]},
		{"year":2029,"NormalRetirementAge":67,"PctCreditForEachDelayYear":8,"yearsFrom62":[0.7,0.75,0.8,0.8666666667,0.9333333333,1,1.08,1.16,1.24]}
	],
	"substantialEarningsMarks":[
		{"year":1938,"SubstantialEarnings":900},{"year":1939,"SubstantialEarnings":900},{"year":1940,"SubstantialEarnings":900},
		{"year":1941,"SubstantialEarnings":900},{"year":1942,"SubstantialEarnings":900},{"year":1943,"SubstantialEarnings":900},
		{"year":1944,"SubstantialEarnings":900},{"year":1945,"SubstantialEarnings":900},{"year":1946,"SubstantialEarnings":900},
		{"year":1947,"SubstantialEarnings":900},{"year":1948,"SubstantialEarnings":900},{"year":1949,"SubstantialEarnings":900},
		{"year":1950,"SubstantialEarnings":900},{"year":1951,"SubstantialEarnings":900},{"year":1952,"SubstantialEarnings":900},
		{"year":1953,"SubstantialEarnings":900},{"year":1954,"SubstantialEarnings":900},{"year":1955,"SubstantialEarnings":1050},
		{"year":1956,"SubstantialEarnings":1050},{"year":1967,"SubstantialEarnings":1050},{"year":1958,"SubstantialEarnings":1050},
		{"year":1959,"SubstantialEarnings":1200},{"year":1960,"SubstantialEarnings":1200},{"year":1961,"SubstantialEarnings":1200},
		{"year":1962,"SubstantialEarnings":1200},{"year":1963,"SubstantialEarnings":1200},{"year":1964,"SubstantialEarnings":1200},
		{"year":1965,"SubstantialEarnings":1200},{"year":1966,"SubstantialEarnings":1650},{"year":1967,"SubstantialEarnings":1650},
		{"year":1968,"SubstantialEarnings":1950},{"year":1969,"SubstantialEarnings":1950},{"year":1970,"SubstantialEarnings":1950},
		{"year":1971,"SubstantialEarnings":1950},{"year":1972,"SubstantialEarnings":2250},{"year":1973,"SubstantialEarnings":2700},
		{"year":1974,"SubstantialEarnings":3300},{"year":1975,"SubstantialEarnings":3525},{"year":1976,"SubstantialEarnings":3825},
		{"year":1977,"SubstantialEarnings":4125},{"year":1978,"SubstantialEarnings":4425},{"year":1979,"SubstantialEarnings":4725},
		{"year":1980,"SubstantialEarnings":5100},{"year":1981,"SubstantialEarnings":5550},{"year":1982,"SubstantialEarnings":6075},
		{"year":1983,"SubstantialEarnings":6675},{"year":1984,"SubstantialEarnings":7050},{"year":1985,"SubstantialEarnings":7425},
		{"year":1986,"SubstantialEarnings":7875},{"year":1987,"SubstantialEarnings":8175},{"year":1988,"SubstantialEarnings":8400},
		{"year":1989,"SubstantialEarnings":8925},{"year":1990,"SubstantialEarnings":9525},{"year":1991,"SubstantialEarnings":9900},
		{"year":1992,"SubstantialEarnings":10350},{"year":1993,"SubstantialEarnings":10725},{"year":1994,"SubstantialEarnings":11250},
		{"year":1995,"SubstantialEarnings":11325},{"year":1996,"SubstantialEarnings":11625},{"year":1997,"SubstantialEarnings":12150},
		{"year":1998,"SubstantialEarnings":12675},{"year":1999,"SubstantialEarnings":13425},{"year":2000,"SubstantialEarnings":14175},
		{"year":2001,"SubstantialEarnings":14925},{"year":2002,"SubstantialEarnings":15750},{"year":2003,"SubstantialEarnings":16125},
		{"year":2004,"SubstantialEarnings":16275},{"year":2005,"SubstantialEarnings":16725},{"year":2006,"SubstantialEarnings":17475},
		{"year":2007,"SubstantialEarnings":18150},{"year":2008,"SubstantialEarnings":18975},{"year":2009,"SubstantialEarnings":19800},
		{"year":2010,"SubstantialEarnings":19800},{"year":2011,"SubstantialEarnings":19800},{"year":2012,"SubstantialEarnings":20475},
		{"year":2013,"SubstantialEarnings":21075},{"year":2014,"SubstantialEarnings":21750},{"year":2015,"SubstantialEarnings":22050},
		{"year":2016,"SubstantialEarnings":22050},{"year":2017,"SubstantialEarnings":23625},{"year":2018,"SubstantialEarnings":23850},
		{"year":2019,"SubstantialEarnings":24675}
	],
	"bendPoints":[
		{"year":1979,"FirstDollarAmtPIA":180,"SecondDollarAmtPIA":1085,"DollarAmtInMaxFamilyBenefitFormula":230},
		{"year":1980,"FirstDollarAmtPIA":194,"SecondDollarAmtPIA":1171,"DollarAmtInMaxFamilyBenefitFormula":248},
		{"year":1981,"FirstDollarAmtPIA":211,"SecondDollarAmtPIA":1274,"DollarAmtInMaxFamilyBenefitFormula":270},
		{"year":1982,"FirstDollarAmtPIA":230,"SecondDollarAmtPIA":1388,"DollarAmtInMaxFamilyBenefitFormula":294},
		{"year":1983,"FirstDollarAmtPIA":254,"SecondDollarAmtPIA":1528,"DollarAmtInMaxFamilyBenefitFormula":324},
		{"year":1984,"FirstDollarAmtPIA":267,"SecondDollarAmtPIA":1612,"DollarAmtInMaxFamilyBenefitFormula":342},
		{"year":1985,"FirstDollarAmtPIA":280,"SecondDollarAmtPIA":1691,"DollarAmtInMaxFamilyBenefitFormula":358},
		{"year":1986,"FirstDollarAmtPIA":297,"SecondDollarAmtPIA":1790,"DollarAmtInMaxFamilyBenefitFormula":379},
		{"year":1987,"FirstDollarAmtPIA":310,"SecondDollarAmtPIA":1866,"DollarAmtInMaxFamilyBenefitFormula":396},
		{"year":1988,"FirstDollarAmtPIA":319,"SecondDollarAmtPIA":1922,"DollarAmtInMaxFamilyBenefitFormula":407},
		{"year":1989,"FirstDollarAmtPIA":339,"SecondDollarAmtPIA":2044,"DollarAmtInMaxFamilyBenefitFormula":433},
		{"year":1990,"FirstDollarAmtPIA":356,"SecondDollarAmtPIA":2145,"DollarAmtInMaxFamilyBenefitFormula":455},
		{"year":1991,"FirstDollarAmtPIA":370,"SecondDollarAmtPIA":2230,"DollarAmtInMaxFamilyBenefitFormula":473},
		{"year":1992,"FirstDollarAmtPIA":387,"SecondDollarAmtPIA":2333,"DollarAmtInMaxFamilyBenefitFormula":495},
		{"year":1993,"FirstDollarAmtPIA":401,"SecondDollarAmtPIA":2420,"DollarAmtInMaxFamilyBenefitFormula":513},
		{"year":1994,"FirstDollarAmtPIA":422,"SecondDollarAmtPIA":2545,"DollarAmtInMaxFamilyBenefitFormula":539},
		{"year":1995,"FirstDollarAmtPIA":426,"SecondDollarAmtPIA":2567,"DollarAmtInMaxFamilyBenefitFormula":544},
		{"year":1996,"FirstDollarAmtPIA":437,"SecondDollarAmtPIA":2635,"DollarAmtInMaxFamilyBenefitFormula":559},
		{"year":1997,"FirstDollarAmtPIA":455,"SecondDollarAmtPIA":2741,"DollarAmtInMaxFamilyBenefitFormula":581},
		{"year":1998,"FirstDollarAmtPIA":477,"SecondDollarAmtPIA":2875,"DollarAmtInMaxFamilyBenefitFormula":609},
		{"year":1999,"FirstDollarAmtPIA":505,"SecondDollarAmtPIA":3043,"DollarAmtInMaxFamilyBenefitFormula":645},
		{"year":2000,"FirstDollarAmtPIA":531,"SecondDollarAmtPIA":3202,"DollarAmtInMaxFamilyBenefitFormula":679},
		{"year":2001,"FirstDollarAmtPIA":561,"SecondDollarAmtPIA":3381,"DollarAmtInMaxFamilyBenefitFormula":717},
		{"year":2002,"FirstDollarAmtPIA":592,"SecondDollarAmtPIA":3567,"DollarAmtInMaxFamilyBenefitFormula":756},
		{"year":2003,"FirstDollarAmtPIA":606,"SecondDollarAmtPIA":3653,"DollarAmtInMaxFamilyBenefitFormula":774},
		{"year":2004,"FirstDollarAmtPIA":612,"SecondDollarAmtPIA":3689,"DollarAmtInMaxFamilyBenefitFormula":782},
		{"year":2005,"FirstDollarAmtPIA":627,"SecondDollarAmtPIA":3779,"DollarAmtInMaxFamilyBenefitFormula":801},
		{"year":2006,"FirstDollarAmtPIA":656,"SecondDollarAmtPIA":3955,"DollarAmtInMaxFamilyBenefitFormula":838},
		{"year":2007,"FirstDollarAmtPIA":680,"SecondDollarAmtPIA":4100,"DollarAmtInMaxFamilyBenefitFormula":869},
		{"year":2008,"FirstDollarAmtPIA":711,"SecondDollarAmtPIA":4288,"DollarAmtInMaxFamilyBenefitFormula":909},
		{"year":2009,"FirstDollarAmtPIA":744,"SecondDollarAmtPIA":4483,"DollarAmtInMaxFamilyBenefitFormula":950},
		{"year":2010,"FirstDollarAmtPIA":761,"SecondDollarAmtPIA":4586,"DollarAmtInMaxFamilyBenefitFormula":972},
		{"year":2011,"FirstDollarAmtPIA":749,"SecondDollarAmtPIA":4517,"DollarAmtInMaxFamilyBenefitFormula":957},
		{"year":2012,"FirstDollarAmtPIA":767,"SecondDollarAmtPIA":4624,"DollarAmtInMaxFamilyBenefitFormula":980},
		{"year":2013,"FirstDollarAmtPIA":791,"SecondDollarAmtPIA":4768,"DollarAmtInMaxFamilyBenefitFormula":1011},
		{"year":2014,"FirstDollarAmtPIA":816,"SecondDollarAmtPIA":4917,"DollarAmtInMaxFamilyBenefitFormula":1042},
		{"year":2015,"FirstDollarAmtPIA":826,"SecondDollarAmtPIA":4980,"DollarAmtInMaxFamilyBenefitFormula":1056},
		{"year":2016,"FirstDollarAmtPIA":856,"SecondDollarAmtPIA":5157,"DollarAmtInMaxFamilyBenefitFormula":1093},
		{"year":2017,"FirstDollarAmtPIA":885,"SecondDollarAmtPIA":5336,"DollarAmtInMaxFamilyBenefitFormula":1131},
		{"year":2018,"FirstDollarAmtPIA":895,"SecondDollarAmtPIA":5397,"DollarAmtInMaxFamilyBenefitFormula":1144},
		{"year":2019,"FirstDollarAmtPIA":926,"SecondDollarAmtPIA":5583,"DollarAmtInMaxFamilyBenefitFormula":1184},
		{"year":null,"FirstDollarAmtPIA":null,"SecondDollarAmtPIA":null,"DollarAmtInMaxFamilyBenefitFormula":null}
	],
	"maximumEarningsCreditable":[
		{"year":1937,"maximumEarningsCreditable":3000},{"year":1938,"maximumEarningsCreditable":3000},
		{"year":1939,"maximumEarningsCreditable":3000},{"year":1940,"maximumEarningsCreditable":3000},{"year":1941,"maximumEarningsCreditable":3000},
		{"year":1942,"maximumEarningsCreditable":3000},{"year":1943,"maximumEarningsCreditable":3000},{"year":1944,"maximumEarningsCreditable":3000},
		{"year":1945,"maximumEarningsCreditable":3000},{"year":1946,"maximumEarningsCreditable":3000},{"year":1947,"maximumEarningsCreditable":3000},
		{"year":1948,"maximumEarningsCreditable":3000},{"year":1949,"maximumEarningsCreditable":3000},{"year":1950,"maximumEarningsCreditable":3000},
		{"year":1951,"maximumEarningsCreditable":3600},{"year":1952,"maximumEarningsCreditable":3600},{"year":1953,"maximumEarningsCreditable":3600},
		{"year":1954,"maximumEarningsCreditable":3600},{"year":1955,"maximumEarningsCreditable":4200},{"year":1956,"maximumEarningsCreditable":4200},
		{"year":1957,"maximumEarningsCreditable":4200},{"year":1958,"maximumEarningsCreditable":4200},{"year":1959,"maximumEarningsCreditable":4800},
		{"year":1960,"maximumEarningsCreditable":4800},{"year":1961,"maximumEarningsCreditable":4800},{"year":1962,"maximumEarningsCreditable":4800},
		{"year":1963,"maximumEarningsCreditable":4800},{"year":1964,"maximumEarningsCreditable":4800},{"year":1965,"maximumEarningsCreditable":4800},
		{"year":1966,"maximumEarningsCreditable":6600},{"year":1967,"maximumEarningsCreditable":6600},{"year":1968,"maximumEarningsCreditable":7800},
		{"year":1969,"maximumEarningsCreditable":7800},{"year":1970,"maximumEarningsCreditable":7800},{"year":1971,"maximumEarningsCreditable":7800},
		{"year":1972,"maximumEarningsCreditable":9000},{"year":1973,"maximumEarningsCreditable":10800},{"year":1974,"maximumEarningsCreditable":13200},
		{"year":1975,"maximumEarningsCreditable":14100},{"year":1976,"maximumEarningsCreditable":15300},{"year":1977,"maximumEarningsCreditable":16500},
		{"year":1978,"maximumEarningsCreditable":17700},{"year":1979,"maximumEarningsCreditable":22900},{"year":1980,"maximumEarningsCreditable":25900},
		{"year":1981,"maximumEarningsCreditable":29700},{"year":1982,"maximumEarningsCreditable":32400},{"year":1983,"maximumEarningsCreditable":35700},
		{"year":1984,"maximumEarningsCreditable":37800},{"year":1985,"maximumEarningsCreditable":39600},{"year":1986,"maximumEarningsCreditable":42000},
		{"year":1987,"maximumEarningsCreditable":43800},{"year":1988,"maximumEarningsCreditable":45000},{"year":1989,"maximumEarningsCreditable":48000},
		{"year":1990,"maximumEarningsCreditable":51300},{"year":1991,"maximumEarningsCreditable":53400},{"year":1992,"maximumEarningsCreditable":55500},
		{"year":1993,"maximumEarningsCreditable":57600},{"year":1994,"maximumEarningsCreditable":60600},{"year":1995,"maximumEarningsCreditable":61200},
		{"year":1996,"maximumEarningsCreditable":62700},{"year":1997,"maximumEarningsCreditable":65400},{"year":1998,"maximumEarningsCreditable":68400},
		{"year":1999,"maximumEarningsCreditable":72600},{"year":2000,"maximumEarningsCreditable":76200},{"year":2001,"maximumEarningsCreditable":80400},
		{"year":2002,"maximumEarningsCreditable":84900},{"year":2003,"maximumEarningsCreditable":87000},{"year":2004,"maximumEarningsCreditable":87900},
		{"year":2005,"maximumEarningsCreditable":90000},{"year":2006,"maximumEarningsCreditable":94200},{"year":2007,"maximumEarningsCreditable":97500},
		{"year":2008,"maximumEarningsCreditable":102000},{"year":2009,"maximumEarningsCreditable":106800},{"year":2010,"maximumEarningsCreditable":106800},
		{"year":2011,"maximumEarningsCreditable":106800},{"year":2012,"maximumEarningsCreditable":110100},{"year":2013,"maximumEarningsCreditable":113700},
		{"year":2014,"maximumEarningsCreditable":117000},{"year":2015,"maximumEarningsCreditable":118500},{"year":2016,"maximumEarningsCreditable":118500},
		{"year":2017,"maximumEarningsCreditable":127200},{"year":2018,"maximumEarningsCreditable":128400},{"year":2019,"maximumEarningsCreditable":132900}
	],
	"averageWageIndexTable":[
		{"year":1951,"averageWageIndex":2799.16},{"year":1952,"averageWageIndex":2973.32},{"year":1953,"averageWageIndex":3139.44},
		{"year":1954,"averageWageIndex":3155.64},{"year":1955,"averageWageIndex":3301.44},{"year":1956,"averageWageIndex":3532.36},{"year":1957,"averageWageIndex":3641.72},
		{"year":1958,"averageWageIndex":3673.8},{"year":1959,"averageWageIndex":3855.8},{"year":1960,"averageWageIndex":4007.12},{"year":1961,"averageWageIndex":4086.76},
		{"year":1962,"averageWageIndex":4291.4},{"year":1963,"averageWageIndex":4396.64},{"year":1964,"averageWageIndex":4576.32},{"year":1965,"averageWageIndex":4658.72},
		{"year":1966,"averageWageIndex":4938.36},{"year":1967,"averageWageIndex":5213.44},{"year":1968,"averageWageIndex":5571.76},{"year":1969,"averageWageIndex":5893.76},
		{"year":1970,"averageWageIndex":6186.24},{"year":1971,"averageWageIndex":6497.08},{"year":1972,"averageWageIndex":7133.8},{"year":1973,"averageWageIndex":7580.16},
		{"year":1974,"averageWageIndex":8030.76},{"year":1975,"averageWageIndex":8630.92},{"year":1976,"averageWageIndex":9226.48},{"year":1977,"averageWageIndex":9779.44},
		{"year":1978,"averageWageIndex":10556.03},{"year":1979,"averageWageIndex":11479.46},{"year":1980,"averageWageIndex":12513.46},{"year":1981,"averageWageIndex":13773.1},
		{"year":1982,"averageWageIndex":14531.34},{"year":1983,"averageWageIndex":15239.24},{"year":1984,"averageWageIndex":16135.07},{"year":1985,"averageWageIndex":16822.51},
		{"year":1986,"averageWageIndex":17321.82},{"year":1987,"averageWageIndex":18426.51},{"year":1988,"averageWageIndex":19334.04},{"year":1989,"averageWageIndex":20099.55},
		{"year":1990,"averageWageIndex":21027.98},{"year":1991,"averageWageIndex":21811.6},{"year":1992,"averageWageIndex":22935.42},{"year":1993,"averageWageIndex":23132.67},
		{"year":1994,"averageWageIndex":23753.53},{"year":1995,"averageWageIndex":24705.66},{"year":1996,"averageWageIndex":25913.9},{"year":1997,"averageWageIndex":27426},
		{"year":1998,"averageWageIndex":28861.44},{"year":1999,"averageWageIndex":30469.84},{"year":2000,"averageWageIndex":32154.82},{"year":2001,"averageWageIndex":32921.92},
		{"year":2002,"averageWageIndex":33252.09},{"year":2003,"averageWageIndex":34064.95},{"year":2004,"averageWageIndex":35648.55},{"year":2005,"averageWageIndex":36952.94},
		{"year":2006,"averageWageIndex":38651.41},{"year":2007,"averageWageIndex":40405.48},{"year":2008,"averageWageIndex":41334.97},{"year":2009,"averageWageIndex":40711.61},
		{"year":2010,"averageWageIndex":41673.83},{"year":2011,"averageWageIndex":42979.61},{"year":2012,"averageWageIndex":44321.67},{"year":2013,"averageWageIndex":44888.16},
		{"year":2014,"averageWageIndex":46481.52},{"year":2015,"averageWageIndex":48098.63},{"year":2016,"averageWageIndex":48642.15},{"year":2017,"averageWageIndex":50321.89}
	]
})

function checkJSONCache (tablename) {
	if (tablename in cachedSocialSecTables) {
		return cachedSocialSecTables[tablename];
	} else {
	    return false;
	}
}

export { checkJSONCache }