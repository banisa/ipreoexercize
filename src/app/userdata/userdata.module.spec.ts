import { UserDataModule } from './userdata.module';

describe('UserdataModule', () => {
  let userdataModule: UserDataModule;

  beforeEach(() => {
    userdataModule = new UserDataModule();
  });

  it('should create an instance', () => {
    expect(userdataModule).toBeTruthy();
  });
});
