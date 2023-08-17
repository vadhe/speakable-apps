import { create } from 'zustand';
// {
//   definition: {
//     en: 'infml to go to bed in order to sleep',
//     id: 'Idiom ini artinya tidur dan biasanya ini menandakan bahwa kita sangat lelah dan ingin segera beristirahat'
//   },
//   example: {
//     en: 'I’m so tired, I think I’m going to hit the sack',
//     id: 'Saya sangat lelah, saya pikir saya akan tidur'
//   },
//   word: 'HIT THE SACK',
// },
type State = {
  word: {
    definition: {
      en: string;
      id: string;
    };
    example: {
      en: string;
      id: string;
    };
    word: string;
  }[];
};

type Actions = {
  setWord: (word: string) => void;
};

export const useWordStore = create<State & Actions>((set) => ({
  word: [],
  setWord: (word: any) => set(() => ({ word: {...word} })),
}));

export default useWordStore;
