import { JwtService } from "@nestjs/jwt";
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// @Injectable()
export class JwtToken {
    constructor(
        private jwtService: JwtService,
        private config: ConfigService
    ) { }
    async signToken(userId: number, email: string): Promise<string> {
        try {
            const payload = {
                sub: userId,
                email
            }
            const secret = this.config.get('JWT_SECRET');
            return this.jwtService.sign(payload, {
                expiresIn: '15m',
                secret: secret
            })
        } catch (error) {
            throw error;
        }
    }
}