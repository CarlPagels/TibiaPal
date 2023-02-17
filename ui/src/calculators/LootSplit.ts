import { LootSplitType } from "../components/lootsplit/LootSplitType";

export const submit = (selectedOption: LootSplitType, input: string) => {
    const isValidData = validateAnalyzerData(input);
    if (!isValidData) {
        return false;
    }

    if (selectedOption === LootSplitType.REMOVE_PLAYERS) {
        // prepare_remove_players_lootsplit();
    } else {
        preplootsplit(selectedOption, input);
    }
}

// function to verify the integrity of the entered data
function validateAnalyzerData(input: String) {
    if (input === "") {
        window.alert("Analyser data cannot be empty");
        return false;
    }

    if (
        input.length < 50 ||
        !input.includes("Balance") ||
        !input.includes("Supplies") ||
        !input.includes("Loot") ||
        !input.includes("Session data") ||
        !input.includes("Loot Type")
    ) {
        window.alert("Incorrect analyser data. Please copy the log and try again. \nIf you believe this is a mistake, please raise a bug report.");
        return false;
    }

    return true;
}

function preplootsplit(selectedOption: LootSplitType, input: string) {
    //getting the raw analyser data
    let analyserData = input.replace(" (Leader)", "").replace(/\n|\r/g, " ");

    // Parsing the data from the log to find out profit per person and the balance of each player
    const sessionDate = findSessionDate(analyserData);
    const sessionDuration = findSessionDuration(analyserData);
    analyserData = remove_first_section(analyserData);
    const numberOfPlayers = findTotalNumberOfPlayers(analyserData);
    const playersAndBalance = findPlayersAndBalance(analyserData, numberOfPlayers);

    const totalProfit = findTotalProfit(playersAndBalance);
    const profitPerPerson = totalProfit / numberOfPlayers;

    //TODO: Fortsätt härifrån
    const whoToPay = final_split(playersAndBalance, profitPerPerson);
    console.log(whoToPay)

    whoToPay.forEach((key, value) => {
        key.forEach((recipient) => {
            console.log(value + " transfer " + recipient.balance + " to " + recipient.name);
        })
    })

    if (selectedOption === LootSplitType.REGULAR) {
        //Todo: Return the results
        // regularlootsplit();
    } else {
        // extra_expenses_click();
    }
}

const remove_first_section = (data: string): string => {
    const index = data.indexOf("Balance: ");
    const substring1 = data.substring(index + 9);
    const index2 = substring1.indexOf(" ");
    const substring2 = substring1.substring(0, index2);
    return substring1.substring(substring2.length + 1);
}

const findTotalNumberOfPlayers = (data: string): number => {
    return (data.match(/Balance/g) || []).length;
}



function findSessionDate(data: String) {
    return data.substring(19, 29);
}

function findSessionDuration(data: String) {
    const index = data.indexOf("Session: ");
    return data.substring(index + 9, index + 15);
}

const findTotalProfit = (playersAndBalance: Map<string, number>) => {
    return Array.from(playersAndBalance.values()).reduce((a, b) => a + b, 0)
}

const findPlayersAndBalance = (data: string, number_of_players: number): Map<string, number> => {
    const playersAndBalance = new Map();

    for (let i = 0; i < number_of_players; i++) {
        const indexOfLoot = data.indexOf("Loot:");
        const indexOfBalance = data.indexOf("Balance: ");
        const indexOfDamage = data.indexOf("Damage: ");

        const name = data.substring(0, indexOfLoot).trim();
        const balance = data.substring(indexOfBalance + 9, indexOfDamage).split(",").join("").trim();

        playersAndBalance.set(name, parseInt(balance));

        data = data.substring(data.indexOf("Healing: ") + 9)
        data = data.substring(data.indexOf(" ") + 1);
    }
    return playersAndBalance;
}

interface Recipient {
    name: string;
    balance: number;
}

function final_split(playersAndBalance: Map<string, number>, profitPerPerson: number): Map<string, Recipient[]> {
    const outstandingPayments = [];
    for(const [key, value] of playersAndBalance) {
        const oustanding_payment = profitPerPerson - value;
        outstandingPayments.push({
            name: key,
            balance: Math.round(oustanding_payment),
        });
    }

    const outgoingTransferer = outstandingPayments.find((value) => value.balance < 0);
    const incomingTransfers = outstandingPayments.filter((value) => value.balance > 0);

    // @ts-ignore
    return new Map().set(outgoingTransferer.name, incomingTransfers);
}

