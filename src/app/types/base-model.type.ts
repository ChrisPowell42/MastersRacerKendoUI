export class basemodel {

    static readonly emptyId: string = "00000000-0000-0000-0000-000000000000";

    id: string;

    constructor() {
        this.id = basemodel.emptyId;
    }

    get hasEmptyId(): boolean {
        return this.id == basemodel.emptyId;
    }

}