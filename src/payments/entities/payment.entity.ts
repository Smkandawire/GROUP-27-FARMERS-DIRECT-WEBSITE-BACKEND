import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('')
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string; // Unique identifier for each payment

  @Column()
  public_key: string; // Public key used in the transaction

  @Column()
  tx_ref: string; // Transaction reference

  @Column('decimal')
  amount: number; // Payment amount

  @Column()
  currency: string; // Currency (e.g., MWK)

  @Column()
  payment_method: string; // Payment method (Airtel Money, TNM Mpamba, National Bank)

  @Column({ nullable: true })
  phone_number?: string; // Phone number (for Airtel Money and TNM Mpamba)

  @Column({ nullable: true })
  account_number?: string; // Account number (for National Bank)

  @Column({ nullable: true })
  account_name?: string; // Account name (for National Bank)

  @Column({ nullable: true })
  reference?: string; // Reference for National Bank payments

  @Column()
  callback_url: string; // Callback URL for payment status

  @Column()
  return_url: string; // Return URL after payment

  @Column()
  customer_email: string; // Customer's email address

  @Column()
  customer_first_name: string; // Customer's first name

  @Column()
  customer_last_name: string; // Customer's last name

  @Column()
  customization_title: string; // Customization title for the payment

  @Column()
  customization_description: string; 

  @Column({ nullable: true })
  meta_uuid?: string; 

  @Column({ nullable: true })
  meta_response?: string; 

  @Column({ default: 'pending' })
  status: string; // Payment status (e.g., pending, completed, failed)

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date; // Timestamp for when the payment was created

  @Column({ type: 'timestamp', nullable: true })
  updated_at?: Date; // Timestamp for when the payment was last updated
}

