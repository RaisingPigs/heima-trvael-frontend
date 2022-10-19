import {reqHotelList} from "@/api";

const state = {
    pageRequest: {
        pagenum: 1,
        pagesize: 10,
        keyword: undefined,
        sortBy: undefined,
        city: undefined,
        brand: undefined,
        starName: undefined,
        minPrice: undefined,
        maxPrice: undefined,
        location: '30.8, 121.8',
        distance: undefined
    },
    hotelPage: {
        total: -1,
        hotelList: []
    }
}

const mutations = {
    GET_HOTEL_LIST(state, hotelPage) {
        state.pageRequest.pagenum++;

        state.hotelPage.total = hotelPage.total;
        if (hotelPage.list) {
            state.hotelPage.hotelList = [...state.hotelPage.hotelList, ...hotelPage.list];
        }
    },
    REFRESH_HOTEL_LIST(state) {
        state.hotelPage.total = -1;
        state.hotelPage.hotelList = [];

        state.pageRequest.pagenum = 1;
    },
    CHANGE_PAGE_REQUEST(state, pageRequest) {
        state.pageRequest = Object.assign(state.pageRequest, pageRequest);
    }
}

const actions = {
    async getHotelList({commit, state}) {
        let res = await reqHotelList(state.pageRequest);

        console.log(res);
        if (res.code === 20000) {
            commit('GET_HOTEL_LIST', res.data);
        }
    },
    refreshHotelList({commit}) {
        commit('REFRESH_HOTEL_LIST');
    },
    changePageRequest({commit}, pageRequest) {
        commit('CHANGE_PAGE_REQUEST', pageRequest);
    }
}

const getters = {
    total({hotelPage}) {
        return hotelPage.total;
    },
    hotelList({hotelPage}) {
        return hotelPage.hotelList;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
