import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { FindDemandByIdService } from '../services/find-demand-by-id/find-demand-by-id.service';

@WebSocketGateway(3001, { transports: 'websockets', cors: { origin: '*' } })
export class DemandGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('DemandGateway');

  constructor(private readonly findDemandByIdService: FindDemandByIdService) {}

  @SubscribeMessage('demand')
  handleMessage(@ConnectedSocket() client: Socket, @MessageBody() id: string) {
    const demand = this.findDemandByIdService.findById(id);
    this.server.emit('demand', demand, client.id);
  }

  afterInit(server: any) {
    this.logger.log(`init: ${server}`);
  }

  handleConnection(client: Socket) {
    this.logger.log(`client connected: ${client}`);
  }

  handleDisconnect(client: Socket) {
    throw new Error(`client disconnected: ${client}`);
  }
}
