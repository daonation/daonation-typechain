import {ethers} from "ethers"
import { DaonationToken__factory, MockToken__factory, Daonation__factory } from "../typechain-types"

export const getContracts = (provider: ethers.providers.JsonRpcProvider, signer: ethers.Signer ) => {
    const daonationToken = DaonationToken__factory.connect('0xe58CA12540Af90BBf3E9877388D3dcE06D09bC05', signer)
    const stableMockToken = MockToken__factory.connect('0x422bF2a6f1572A869e83c64D59CFF995Fb8B9504', signer)
    // vaquinhaLibrary = '0x60D82D6557Da4957410fB7625a2aAf010232AC10'
    const daonation = Daonation__factory.connect('0xf22DDd16357FE0AEc832cf0C1f68cc9F8f862839', signer)
    return { daonationToken, stableMockToken, daonation }
}