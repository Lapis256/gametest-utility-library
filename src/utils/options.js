import * as m from "mojang-minecraft";


function generateClass(baseClass) {
    return class extends baseClass {
        constructor(options) {
            super();
            for(const key in options) {
                if(key in this) this[key] = options[key];
                else throw `${key} does not exist in ${baseClass.name}`;
            }
        }
    }
}

export const BlockRaycastOptions = generateClass(m.BlockRaycastOptions);
export const EntityDataDrivenTriggerEventOptions = generateClass(m.EntityDataDrivenTriggerEventOptions);
export const EntityEventOptions = generateClass(m.EntityEventOptions);
export const EntityQueryOptions  = generateClass(m.EntityQueryOptions);
export const EntityQueryScoreOptions = generateClass(m.EntityQueryScoreOptions);
export const EntityRaycastOptions = generateClass(m.EntityRaycastOptions);
export const ExplosionOptions = generateClass(m.ExplosionOptions);
