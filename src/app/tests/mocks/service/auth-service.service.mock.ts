import { of } from 'rxjs';
import { UserRole } from '../../../../types/authentified-user.type';
import { vi } from "vitest";
import { AuthService } from '../../../../service/auth-service.service';
import { HttpClient } from '@angular/common/http';

export const MockAuthServiceBestCase  = {
  login : vi.fn().mockReturnValue(of({message: "success"})),
  whoami : vi.fn().mockReturnValue(of({username: "something", role: UserRole.ADMIN})),
  logout : vi.fn().mockReturnValue(of({message: "success"}))
}
