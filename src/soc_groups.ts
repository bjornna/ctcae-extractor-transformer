export type GroupDef = {
    id: number;
    name: string;
    url?: string;
    ncItCode?: string;
};

export const soc_groups: GroupDef[] = [
    {
        id: 10005329,
        name: "Blood and lymphatic system disorders",
    },
    {
        id: 10061024,
        name: "Cardiac disorders",
    },
    {
        id: 10010331,
        name: "Congenital, familial and genetic disorders",
    },
    {
        id: 10013993,
        name: "Ear and labyrinth disorders",
        ncItCode: "C143185",
        url: "http://ncicb.nci.nih.gov/xml/owl/EVS/ctcae5.owl#C143185",
    },
    {
        id: 10014698,
        url: "http://ncicb.nci.nih.gov/xml/owl/EVS/ctcae5.owl#C143166",
        ncItCode: "C143166",
        name: "Endocrine disorders",
    },
    {
        id: 10015919,
        name: "Eye disorders",
        ncItCode: "C143167",
        url: "http://ncicb.nci.nih.gov/xml/owl/EVS/ctcae5.owl#C143167"
    },
    {
        id: 10017947,
        name: "Gastrointestinal disorders",
        ncItCode: "C146630",
        url: "http://ncicb.nci.nih.gov/xml/owl/EVS/ctcae5.owl#C146630",
    },
    {
        id: 10018065,
        name: "General disorders and administration site conditions",
        ncItCode: "C143169",
        url: "http://ncicb.nci.nih.gov/xml/owl/EVS/ctcae5.owl#C143169"
    },
    {
        id: 10019805,
        name: "Hepatobiliary disorders",
        ncItCode: "C143170",
        url: "http://ncicb.nci.nih.gov/xml/owl/EVS/ctcae5.owl#C143170"
    },
    {
        id: 10021428,
        name: "Immune system disorders",
        ncItCode: "C143186",
        url: "http://ncicb.nci.nih.gov/xml/owl/EVS/ctcae5.owl#C143186"
    },
    {
        id: 10021881,
        name: "Infections and infestations",
    },
    {
        id: 10022117,
        name: "Injury, poisoning and procedural complications",
    },
    {
        id: 10022891,
        name: "Investigations",
    },
    {
        id: 10027433,
        name: "Metabolism and nutrition disorders",
    },
    {
        id: 10028395,
        name: "Musculoskeletal and connective tissue disorders",
    },
    {
        id: 10029104,
        name: "Neoplasms benign, malignant and unspecified (incl cysts and polyps)",
    },
    {
        id: 10029205,
        name: "Nervous system disorders",
    },
    {
        id: 10036585,
        name: "Pregnancy, puerperium and perinatal conditions",
    },
    {
        id: 10037175,
        name: "Psychiatric disorders",
    },
    {
        id: 10038359,
        name: "Renal and urinary disorders",
    },
    {
        id: 10038604,
        name: "Reproductive system and breast disorders",
    },
    {
        id: 10038738,
        name: "Respiratory, thoracic and mediastinal disorders",
    },
    {
        id: 10040785,
        name: "Skin and subcutaneous tissue disorders",
    },
    {
        id: 10041244,
        name: "Social circumstances",
    },
    {
        id: 10042613,
        name: "Surgical and medical procedures",
    },
    {
        id: 10047065,
        name: "Vascular disorders",
    },
];


export function SocGroupToRecord():Record<string,number> {
    const r:Record<string,number> = {};
    for(const x of soc_groups){
        r[x.name] = x.id
    }
    return r;
}