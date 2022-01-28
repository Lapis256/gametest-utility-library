import { world } from "mojang-minecraft";


const dimensions = [
    "overworld",
    "nether",
    "the end"
].map(name => ({ name, dim: world.getDimension(name)}));
Object.freeze(dimensions);


class _Dimension {
    getName(dimension) {
        const { name } = dimensions.find(({ dim }) => dim === dimension);
        return name;
    }

    get(dimName) {
        const { dim } = dimensions.find(({ name }) => name === dimName);
        return dim;
    }
}

export const Dimension = new _Dimension();
