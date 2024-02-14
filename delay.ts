const delay = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const args = process.argv.slice(2);
const delayTime = args[0] ? parseInt(args[0], 10) : 1000;

delay(delayTime).then(() => process.exit(0));