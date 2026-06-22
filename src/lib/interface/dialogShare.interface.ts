export interface DialogShareOptions {
    shareButtons: Array<shareButton>;
    description?: string;
    subtitle?: string;
    picture?: string;
    title?: string;
}

type shareButton = 'facebook' | 'twitter' | 'linkedin' | 'whatsapp' | 'email' | 'copy' | 'telegram' | 'instagram';
