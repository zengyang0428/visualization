export interface ShowAddSwitch {
	confirm: boolean;
	dead: boolean;
	localinfeciton: boolean;
	importedCase: boolean;
	noInfect: boolean;
	localConfirm: boolean;
	all: boolean;
	suspect: boolean;
	heal: boolean;
	nowConfirm: boolean;
	nowSevere: boolean;
}

export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface Total {
	nowConfirm: number;
	showRate: boolean;
	showHeal: boolean;
	continueDayZeroLocalConfirmAdd: number;
	mtime: string;
	provinceLocalConfirm: number;
	continueDayZeroLocalConfirm: number;
	dead: number;
	mediumRiskAreaNum: number;
	confirm: number;
	heal: number;
	wzz: number;
	highRiskAreaNum: number;
	adcode: string;
}

export interface Today {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	wzz_add: string;
	local_confirm_add: number;
}

export interface Total {
	mediumRiskAreaNum: number;
	showRate: boolean;
	heal: number;
	showHeal: boolean;
	continueDayZeroLocalConfirmAdd: number;
	nowConfirm: number;
	confirm: number;
	dead: number;
	provinceLocalConfirm: number;
	mtime: string;
	adcode: string;
	wzz: number;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirm: number;
}

export interface Children {
	date: string;
	today: Today;
	total: Total;
	name: string;
	adcode: string;
}

export interface Today {
	abroad_confirm_add: number;
	dead_add: number;
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	tip: string;
	wzz_add: string;
	local_confirm_add: number;
}

export interface Total {
	continueDayZeroLocalConfirmAdd: number;
	mtime: string;
	showRate: boolean;
	showHeal: boolean;
	provinceLocalConfirm: number;
	highRiskAreaNum: number;
	continueDayZeroConfirm: number;
	adcode: string;
	confirm: number;
	dead: number;
	heal: number;
	nowConfirm: number;
	wzz: number;
	continueDayZeroConfirmAdd: number;
	mediumRiskAreaNum: number;
}

export interface Children {
	children: Children[];
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
}

export interface AreaTree {
	name: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface ChinaTotal {
	importedCase: number;
	showLocalConfirm: number;
	showlocalinfeciton: number;
	noInfectH5: number;
	local_acc_confirm: number;
	deadAdd: number;
	heal: number;
	suspect: number;
	mtime: string;
	localConfirmAdd: number;
	highRiskAreaNum: number;
	mRiskTime: string;
	noInfect: number;
	localWzzAdd: number;
	localConfirmH5: number;
	confirmAdd: number;
	nowLocalWzz: number;
	localConfirm: number;
	dead: number;
	nowSevere: number;
	nowConfirm: number;
	confirm: number;
	mediumRiskAreaNum: number;
}

export interface ChinaAdd {
	localConfirmH5: number;
	confirm: number;
	heal: number;
	dead: number;
	suspect: number;
	importedCase: number;
	noInfect: number;
	noInfectH5: number;
	nowConfirm: number;
	nowSevere: number;
	localConfirm: number;
}

export interface Diseaseh5Shelf {
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
	chinaAdd: ChinaAdd;
	isShowAdd: boolean;
}

export interface StatisGradeCityDetail {
	city: string;
	nowConfirm: number;
	dead: number;
	date: string;
	sdate: string;
	wzz_add: string;
	province: string;
	confirmAdd: number;
	confirm: number;
	heal: number;
	grade: string;
	mtime: string;
	syear: number;
}

export interface RootObject {
	diseaseh5Shelf: Diseaseh5Shelf;
	statisGradeCityDetail: StatisGradeCityDetail[];
}