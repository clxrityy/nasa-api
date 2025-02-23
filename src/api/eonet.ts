export class EONET_API {
    private readonly baseUrl = "https://eonet.gsfc.nasa.gov/api/v3/events" as const;
    private readonly sourceIds?: string[];
    private readonly categoryIds?: string[];
    private readonly status?: "open" | "closed" | "all";
    private readonly limit?: number = 10;
    private readonly days?: number = 7;
    private readonly startDate?: string | Date;
    private readonly endDate?: string | Date;


    constructor(sourceIds?: string[], categoryIds?: string[], status?: "open" | "closed" | "all", limit?: number, days?: number, startDate?: string | Date, endDate?: string | Date) {
        this.sourceIds = sourceIds;
        this.categoryIds = categoryIds;
        this.status = status;
        this.limit = limit;
        this.days = days;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    private buildUrl(): string {
        let url = this.baseUrl + "?";
        if (this.sourceIds) {
            if (this.sourceIds.length > 1) {
                url += `source=${this.sourceIds.join(",")}&`;
            } else {
                url += `source=${this.sourceIds[0]}&`;
            }
        }
        if (this.categoryIds) {
            if (this.categoryIds.length > 1) {
                url += `category=${this.categoryIds.join(",")}&`;
            } else {
                url += `category=${this.categoryIds[0]}&`;
            }
        }
        if (this.status) {
            url += `status=${this.status}&`;
        }
        if (this.limit) {
            url += `limit=${this.limit}&`;
        }
        if (this.days) {
            url += `days=${this.days}&`;
        }
        if (this.startDate) {
            url += `start=${this.startDate}&`;
        }
        if (this.endDate) {
            url += `end=${this.endDate}&`;
        }
        return url;
    }

    public async getEvents() {
        const url = this.buildUrl();
        const response = await fetch(url);

        if (response.status === 400) {
            throw new Error("400 Bad Request")
        }

        return await response.json();
    }
}