import { Invoice } from 'src/model/invoice';

export const invoices: Invoice[] = [
      {
        VoucherNo: '1',
        SupplierName: 'Only Iban',
        PaymentDate: '2021-07-21T00:00:00+02:00',
        CurrencyCode: 'DKK',
        Amount: 10.00,
        EntryAmount: 10.0,
        InvoiceNumber: 'INV-12345',
        Errors: {},
        Exists: false,
        DueDate: '2021-06-23T00:00:00Z',
        Payments: [
          {
            PaymentReference: '22TZ3SWCCVS',
            Amount: 10.00,
            BookkeepingStatus: 2,
            DueDate: '2021-06-23T00:00:00',
            ExecutionDate: '2021-07-06T00:00:00',
            CurrencyCode: 'DKK'
          }
        ]
      },
      {
        VoucherNo: '2',
        SupplierName: 'Only Iban',
        PaymentDate: '2021-06-23T00:00:00Z',
        CurrencyCode: 'EUR',
        Amount: 10.0,
        EntryAmount: 10.0,
        InvoiceNumber: 'INV-12357',
        Errors: {
          InvalidBIC: 'Global',
          InvalidCountryCode: 'Global'
        },
        Exists: false,
        DueDate: '2021-06-23T00:00:00Z',
        Payments: []
      },
      {
        VoucherNo: '1040',
        SupplierName: 'Only Iban',
        PaymentDate: '2021-07-21T00:00:00+02:00',
        CurrencyCode: 'DKK',
        Amount: 99.00,
        EntryAmount: 100.0,
        InvoiceNumber: '1040',
        Errors: {},
        Exists: true,
        DueDate: '2021-06-25T00:00:00Z',
        Payments: [
          {
            PaymentReference: '2JKKP0ROF3L',
            Amount: 1.00,
            BookkeepingStatus: 1,
            DueDate: '2021-06-25T00:00:00',
            ExecutionDate: '2021-07-21T00:00:00',
            CurrencyCode: 'DKK'
          }
        ]
      },
      {
        VoucherNo: '1001',
        SupplierName: 'Spanish Supplier',
        PaymentDate: '2021-07-21T00:00:00+02:00',
        CurrencyCode: 'EUR',
        Amount: 0.00,
        EntryAmount: 99.0,
        InvoiceNumber: 'INV-9864',
        Errors: {},
        Exists: true,
        DueDate: '2021-06-30T00:00:00Z',
        Payments: [
          {
            PaymentReference: '2LJGVR3TXIE',
            Amount: 99.00,
            BookkeepingStatus: 0,
            DueDate: '2021-06-30T00:00:00',
            ExecutionDate: '2021-07-21T00:00:00',
            CurrencyCode: 'EUR'
          }
        ]
      },
      {
        VoucherNo: '1004',
        SupplierName: 'Spanish Supplier',
        PaymentDate: '2021-07-21T00:00:00+02:00',
        CurrencyCode: 'EUR',
        Amount: 3418.47,
        EntryAmount: 3453.0,
        InvoiceNumber: 'IO-23434',
        Errors: {},
        Exists: true,
        DueDate: '2021-06-30T00:00:00Z',
        Payments: [
          {
            PaymentReference: '2FMSBK3DEL6',
            Amount: 34.53,
            BookkeepingStatus: 1,
            DueDate: '2021-06-30T00:00:00',
            ExecutionDate: '2021-07-21T00:00:00',
            CurrencyCode: 'EUR'
          }
        ]
      },
      {
        VoucherNo: '142',
        SupplierName: 'Only Iban',
        PaymentDate: '2021-07-23T00:00:00+02:00',
        CurrencyCode: 'EUR',
        Amount: 10.0,
        EntryAmount: 10.0,
        InvoiceNumber: 'only iban',
        Errors: {},
        Exists: false,
        DueDate: '2021-07-23T00:00:00Z',
        Payments: []
      }
    ];
