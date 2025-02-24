export const initialState = {
    haberList: [],
    zodiacList: [],
    planetList: [],
    profilList: [],
    selectedHaber: "",
    selectedPerson: "null",
    selectedTopic: "konu",
    search: "",
    zodiacDetail: [],
    planetDetail: [],
    // Form data
    tarih: "",
    baslik: "",
    ozet: "",
    detaylar: "",
  };
  
export const reducer = (state, action) => {
  switch (action.type) {
    case "getHaberData":
      console.log("Reducer'a gelen payload:", action.payload)
      return { ...state, 
        haberList: action.payload };

    case "getZodiacData":
      return { ...state, 
        zodiacList: action.payload };

    case "getPlanetData":
      return { ...state, 
        planetList: action.payload };

    case "getPeopleData":
      return { ...state, 
        profilList: action.payload 
      };
    case "getZodiacDetails":
      return{
        ...state,
        zodiacDetail:action.payload
      }
    case "getPlanetDetails":
      return{
        ...state,
        planetDetail:action.payload
      }
    case "search":
      console.log('Search dispatch edildi:', action.payload);  
      return{
          ...state,
          search:action.payload
      }
    case "selectedTopic":
      return{
          ...state,
          selectedTopic:action.payload
      }
    case "haberFormReset":
      return {
        ...state,
        tarih: "", 
        baslik: "", 
        ozet: "", 
        detaylar: "",
      };

    case "tarih":
      return { 
        ...state, 
        tarih: action.payload 
      };
    case "baslik":
      return { 
        ...state, 
        baslik: action.payload 
      };
    case "ozet":
      return { 
        ...state, 
        ozet: action.payload 
      };
    case "detaylar":
      return { 
        ...state, 
        detaylar: action.payload 
      };

    case "selectedHaber":
      const choosen = action.payload
      return {
        ...state,
        selectedHaber: choosen,
        baslik: choosen.baslik,
        tarih: choosen.tarih,
        ozet: choosen.ozet,
        detaylar: choosen.detaylar,
      };

    case "AddHaber":
       const newHaberList = [...state.haberList, action.newHaber];
      return { ...state, 
        haberList: newHaberList };

    case "deleteHaber":
      const updatedHaberList = state.haberList.filter(item => item.id!== action.id );
      return { ...state, haberList: updatedHaberList };

    case "editHaber":
      const editedHaberList = state.haberList.map(haber => {
        if (haber.id === state.selectedHaber.id) {
          return { ...action.newHaber }
        }
        else{
          return{...haber}
        }
      })
       return{ 
          ...state, 
          haberList: editedHaberList, 
          selectedHaber: ""
       }

    default:
     return state;
  }
}