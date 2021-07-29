
export interface Invoice {
    VoucherNo: string;
    SupplierName: string;
    PaymentDate: string;
    CurrencyCode: string;
    Amount: number;
    EntryAmount: number;
    InvoiceNumber: string;
    Errors: ErrorInterface;
    Exists: boolean;
    DueDate: string;
    PastDue?: boolean;
    status?: string;
    Payments: PaymentInterface[];
}

export interface ErrorInterface {
    InvalidBIC?: string;
    InvalidCountryCode?: string;

}

export interface PaymentInterface {
    PaymentReference: string;
    Amount: number;
    BookkeepingStatus: number;
    DueDate: string;
    ExecutionDate: string;
    CurrencyCode: string;

}
