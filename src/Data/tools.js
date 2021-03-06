const tools = [
    {
        id: 1,
        name: 'Joe Biden', 
        age: 55, 
        country: 'USA', 
        position: 'President', 
        budget: 52000000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/800px-Joe_Biden_presidential_portrait.jpg'
    },
    {
        id: 2,
        name: 'Justin Trudeau', 
        age: 48, 
        country: 'Canada', 
        position: 'Prime Minister', 
        budget: 21000000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Trudeau_visit_White_House_for_USMCA_%28cropped%29.jpg'
    },
    {
        id: 3,
        name: 'Vladimir Putin', 
        age: 56, 
        country: 'Russia', 
        position: 'President', 
        budget: 20000000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Vladimir_Putin_%282018-03-01%29_03_%28cropped%29.jpg/220px-Vladimir_Putin_%282018-03-01%29_03_%28cropped%29.jpg'
    },
    {
        id: 4,
        name: 'Alberto Fernández', 
        age: 45, 
        country: 'Argentina', 
        position: 'President', 
        budget: 1900000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Alberto_Fernandez_2020.jpg/800px-Alberto_Fernandez_2020.jpg'
    },
    {
        id: 5,
        name: 'Abdul Hamid', 
        age: 55, 
        country: 'Bangladesh', 
        position: 'President', 
        budget: 7600000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Abdul_Hamid_-_2014_%28cropped%29.jpg'
    },
    {
        id: 6,
        name: 'Scott Morrison', 
        age: 49, 
        country: 'Australia', 
        position: 'Prime Minister', 
        budget: 21200000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Scott_Morrison_2014.jpg/220px-Scott_Morrison_2014.jpg'
    },
    {
        id: 7,
        name: 'Recep Tayyip Erdoğan', 
        age: 58, 
        country: 'Turkey', 
        position: 'President', 
        budget: 16500000,
        image: 'https://en.wikipedia.org/wiki/Recep_Tayyip_Erdo%C4%9Fan#/media/File:Recep_Tayyip_Erdo%C4%9Fan_2018_(cropped).jpg'
    },
    {
        id: 8,
        name: 'Stefan Löfven', 
        age: 60, 
        country: 'Sweden', 
        position: 'Prime Minister', 
        budget: 27600000,
        image: 'https://en.wikipedia.org/wiki/Stefan_L%C3%B6fven#/media/File:Stefan_L%C3%B6fven_(cropped).jpg'
    },
    {
        id: 9,
        name: 'Sheikh Mohammed bin Rashid Al Maktoum', 
        age: 62, 
        country: 'UAE', 
        position: 'Prime Minister', 
        budget: 38400000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Mohamedu_bin_Ra%C5%A1idu_Almakt%C5%ABmu.jpg/800px-Mohamedu_bin_Ra%C5%A1idu_Almakt%C5%ABmu.jpg'
    },
    {
        id: 10,
        name: 'Abdulla Aripov', 
        age: 56, 
        country: 'Uzbekistan', 
        position: 'Prime Minister', 
        budget: 11000000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Abdulla_Aripov.png'
    },
    {
        id: 11,
        name: 'Alexander De Croo', 
        age: 45, 
        country: 'Belgium', 
        position: 'Prime Minister', 
        budget: 23000000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Informal_meeting_of_ministers_responsible_for_development_%28FAC%29._Arrivals_Alexander_De_Croo_%2836766610160%29_%28cropped2%29.jpg/220px-Informal_meeting_of_ministers_responsible_for_development_%28FAC%29._Arrivals_Alexander_De_Croo_%2836766610160%29_%28cropped2%29.jpg'
    },
    {
        id: 12,
        name: 'Jair Bolsonaro', 
        age: 56, 
        country: 'Brazil', 
        position: 'President', 
        budget: 32500000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/2020-03-24_Pronunciamento_do_Presidente_da_Rep%C3%BAblica%2C_Jair_Bolsonaro_em_Rede_Nacional_de_R%C3%A1dio_e_Televis%C3%A3o_-_49695919452_%28cropped_2%29.jpg/220px-2020-03-24_Pronunciamento_do_Presidente_da_Rep%C3%BAblica%2C_Jair_Bolsonaro_em_Rede_Nacional_de_R%C3%A1dio_e_Televis%C3%A3o_-_49695919452_%28cropped_2%29.jpg'
    },
    {
        id: 13,
        name: 'Iván Duque', 
        age: 48, 
        country: 'Colombia', 
        position: 'President', 
        budget: 29000000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Secretary_Pompeo_Delivers_a_Press_Statement_with_Colombian_President_Duque_%2850369491081%29_%28cropped%29.jpg/800px-Secretary_Pompeo_Delivers_a_Press_Statement_with_Colombian_President_Duque_%2850369491081%29_%28cropped%29.jpg'
    },
    {
        id: 14,
        name: 'Mostafa Madbouly', 
        age: 54, 
        country: 'Egypt', 
        position: 'Prime Minister', 
        budget: 23000000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%D9%85%D8%B5%D8%B7%D9%81%D9%89_%D9%85%D8%AF%D8%A8%D9%88%D9%84%D9%8A_-_%D9%85%D8%A4%D8%AA%D9%85%D8%B1_%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A7%D9%82_2020.png/220px-%D9%85%D8%B5%D8%B7%D9%81%D9%89_%D9%85%D8%AF%D8%A8%D9%88%D9%84%D9%8A_-_%D9%85%D8%A4%D8%AA%D9%85%D8%B1_%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A7%D9%82_2020.png'
    },
    {
        id: 15,
        name: 'Sauli Niinistö', 
        age: 56, 
        country: 'Finland', 
        position: 'President', 
        budget: 41000000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/President_of_Finland_Sauli_Niinist%C3%B6_2019.jpg'
    },
    {
        id: 16,
        name: 'Jean Castex', 
        age: 55, 
        country: 'France', 
        position: 'Prime Minister', 
        budget: 22000000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Portrait_Jean_Castex_%28cropped%29.jpg'
    },
    {
        id: 17,
        name: 'Ebrahim Raisi', 
        age: 57, 
        country: 'Iran', 
        position: 'President', 
        budget: 44000000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Raisi_in_2021-02_%28cropped%29.jpg'
    },
    {
        id: 18,
        name: 'Imran Khan', 
        age: 46, 
        country: 'Pakistan', 
        position: 'Prime Minister', 
        budget: 52000000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Imran_Ahmed_Khan_Niazi_-_UNGA_%2848784380531%29_%28cropped%29.jpg'
    }
]