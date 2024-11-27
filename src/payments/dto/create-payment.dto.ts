export class CreatePaymentDto {
        public_key: string;
        tx_ref: string;
        amount: number;
        currency: string;
        callback_url: string;
        return_url: string;
      
        // Customer details
        customer: {
          Phone_number: string;
          first_name: string;
          last_name: string;
        };
      
        // Payment customization
        customization: {
          title: string;
          description: string;
        };
      
        
        meta: {
          uuid: string;
          response: string;
        };
      
        
        payment_method: 'Airtel Money' | 'TNM Mpamba' | 'National Bank';
        airtel_money?: {
          phone_number: string;
          amount: string;
        };
        tnm_mpamba?: {
          phone_number: string;
          amount: string;
        };
        national_bank?: {
          account_number: string;
          account_name: string;
          reference : string;
        };
      }
      

