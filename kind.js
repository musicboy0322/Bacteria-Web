const typeList = {
    "Name": ["PGPR", "Biological Control", "Symbiotic", "Symbiotic", "Symbiotic", "Other"],
    "Specise":
        [
            "Bacteria", "Fungal", "Bacteria Grams positive", "Bacteria Grams nagitive", "Algae", "other",
        ],
    "Function":
    {
        "Plant Growth Substances": ["ACC deaminase", "IAA", "Cytokinin", "GA", "Others"],
        "Nutritions Uptake & Chelators": ["N-fixing", "P-fixing", "K-fixing", "Siderophore", "Others chelators"],
        "Halotolerence": ["Phosphate solubilization", "Heavy metal tolerence", "ACC deaminase", "Others"],
        "Water & Temperature Stress": ["Flood", "Drought", "Heat tolerence", "Cold tolerence", "Others"],
        "Pesticide": ["Insecticide", "Chitinase", "Protease", "Fungicide", "Bactericide", "Others"],
        "Hemolysis & Pathogenic": ["(β)= Beta hemolysis (complete hemolysis)", "(α)= Alpha hemolysis (partial hemolysis)",
            "(γ)= Gamma hemolysis (No hemolysis)", "Non-pathogenic", "Pathogenic"],
        "Others": ["Unknown", "Growth Promotion (Reason Unknown)"]
    },
    "Resource": ["Purchased & Recived from other institutes", "Root surface", "Leaf surface", "Root tissue", "Leaf tissue",
        "Infected tissue", "Fleid  Soil", "Wild type", "Fresh water", "Sea water", "Others"],
    "Crop/Target": ["Chenopodium formosanum (Red quinoa)", "Capsicum annuum (Chili)", "Oryza sativa (Paddy rice)",
        "Zea mays (Corn)", "Glycine max (Soy bean)", "Sewage", "Alkaline soil"]
}

module.exports = typeList;