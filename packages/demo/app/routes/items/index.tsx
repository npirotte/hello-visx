import {
  Box,
  Button,
  Heading,
  Table,
  Tbody,
  Td,
  Tr,
  Switch,
  FormControl,
  FormLabel,
  Thead,
  Th,
} from '@chakra-ui/react';
import { useFetcher, useLoaderData } from '@remix-run/react';
import { ActionFunction } from 'remix';

import { GetDatasetsQuery, getGqlClient, getSdk } from '@hello-visx/graphql-schema';
import { FunctionComponent } from 'react';
import { isNil } from 'lodash';

export const loader = async () => {
  const client = getGqlClient();
  const results = await getSdk(client).GetDatasets({ limit: 20, offset: 0 });

  return results.data;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const datasetId = formData.get('id');
  const newValue = formData.get('protected');

  if (!newValue) {
    throw new Error('Protected value must be provided')
  }
  
  const client = getGqlClient();
  await getSdk(client).UpdateDatasetProtection({
    id: datasetId,
    protected: newValue === "true",
  });

  return null;
}

const DatesetRow: FunctionComponent<{id: string; name: string; protected: boolean}> = (props) => {
  const fetcher = useFetcher();

  const optimisticValue = fetcher.submission?.formData.get('protected');
  const protectedValue = isNil(optimisticValue)
    ? props.protected
    : optimisticValue === 'true';
  const protectedDisabled = fetcher.state !== 'idle';

  const onClick= () => {
    fetcher.submit(
      {
        id: props.id,
        protected: (!protectedValue).toString(),
      },
      { method: 'post' }
    );
  };

  return (
    <Tr key={props.id}>
      <Td>{props.name}</Td>
      <Td>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="protected" mb="0" hidden={true}>
              protected
            </FormLabel>
            <Switch
              id="protected"
              isChecked={protectedValue}
              onChange={onClick}
              isDisabled={protectedDisabled}
            />
          </FormControl>
      </Td>
    </Tr>
  );
};

export default function Items() {
  const { datasets } = useLoaderData<GetDatasetsQuery>();

  return (
    <Box>
      <Heading>This is your awesome list of items</Heading>
      <Table>
        <Thead>
          <Tr>
            <Th>Dataset</Th>
            <Th>Protected</Th>
          </Tr>
        </Thead>
        <Tbody>
          {datasets.map((dataset) => {
            return <DatesetRow key={dataset.id} id={dataset.id} name={dataset.name} protected={dataset.protected} /> 
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
