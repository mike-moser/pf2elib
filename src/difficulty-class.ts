export interface SimpleDifficultyClass
{
    proficiency: string;
    difficulty_class: number;
}

export interface DifficultyAdjustment
{
    adjustment_type: string;
    adjustment_value: number;
}

export class DifficultyClass 
{
    static simpleDCs: SimpleDifficultyClass[] = [
        {
            proficiency: "Untrained",
            difficulty_class: 10
        },
        {
            proficiency: "Trained",
            difficulty_class: 15
        },
        {
            proficiency: "Expert",
            difficulty_class: 20
        },
        {
            proficiency: "Master",
            difficulty_class: 30
        },
        {
            proficiency: "Legendary",
            difficulty_class: 40
        }
    ];

    static spellDCs: number[] = [ 15, 18, 20, 23, 26, 28, 31, 34, 36, 39 ];
    
    static levelledDCs: number[] = [ 14, 15, 16, 18, 19, 20, 22, 23, 24, 26, 27, 28, 30, 31, 32, 34, 35, 36, 38, 39, 40, 42, 44, 46, 48, 50 ];

    static difficultyAdj: DifficultyAdjustment[] = [
            {
                adjustment_type: "Incredibly easy",
                adjustment_value: -10
            },
            {
                adjustment_type: "Very easy",
                adjustment_value: -5
            },
            {
                adjustment_type: "Easy",
                adjustment_value: -2
            },
            {
                adjustment_type: "Normal",
                adjustment_value: 0
            },
            {
                adjustment_type: "Hard",
                adjustment_value: 2
            },
            {
                adjustment_type: "Very hard",
                adjustment_value: 5
            },
            {
                adjustment_type: "Incredibly hard",
                adjustment_value: 10
            },
        ];

    static rarityAdj: DifficultyAdjustment[] = [
        {
            adjustment_type: "Common",
            adjustment_value: 0
        },
        {
            adjustment_type: "Uncommon",
            adjustment_value: 2
        },
        {
            adjustment_type: "Rare",
            adjustment_value: 5
        },
        {
            adjustment_type: "Unique",
            adjustment_value: 10
        },
    ];

    /**
     * getSimpleDC
     *  proficiency: string, difficulty?: string 
     **/
    public static getSimpleDC(proficiency: string, difficulty?: string): number {
        let adjust: number = 0;
        if(difficulty !== undefined) {
            adjust = this.difficultyAdj.find(diff => diff.adjustment_type.toLowerCase() === difficulty.toLowerCase())?.adjustment_value ?? 0;
        }

        let dc: number = 10;
        dc = this.simpleDCs.find(s => s.proficiency.toLowerCase() === proficiency.toLowerCase())?.difficulty_class ?? 10;

        return dc + adjust;
    }

    /**
     * getSpellDC
     * spellLevel: number, rarity?: string
     **/
    public static getSpellDC(spellLevel: number, rarity?: string) {
        let adjust: number = 0;
        if(rarity !== undefined) {
            adjust = this.rarityAdj.find(r => r.adjustment_type.toLowerCase() === rarity.toLowerCase())?.adjustment_value ?? 0;
        }

        let dc = this.spellDCs[0];
        if(spellLevel <= 1) dc = this.spellDCs[0];
        else if(spellLevel >= 10) dc = this.spellDCs[9];
        else dc = this.spellDCs[spellLevel];

        return dc + adjust;
    }


    /**
     * getDCByLevel
     * level: number, difficulty?: string
     **/
    public static getDCByLevel(level: number, difficulty?: string) {
        let adjust: number = 0;
        if(difficulty !== undefined) {
            adjust = this.difficultyAdj.find(diff => diff.adjustment_type.toLowerCase() === difficulty.toLowerCase())?.adjustment_value ?? 0;
        }

        let dc: number = this.levelledDCs[0];
        if(level <= 0) dc = this.levelledDCs[0];
        else if(level >= 25) dc = this.levelledDCs[25];
        else dc = this.levelledDCs[level];

        return dc + adjust;
    }
}