import { Metadata } from '@metaplex-foundation/mpl-token-metadata';

export async function getNFTs({connection,publicKey})
  {const nftsmetadata = await Metadata.findDataByOwner(connection,publicKey);

  console.log(nftsmetadata)
};
